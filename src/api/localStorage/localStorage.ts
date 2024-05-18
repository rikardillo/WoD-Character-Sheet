import { appLogger, loggerMethodsMiddleware } from "@/common/utils/logger";
import {
  type Character,
  type CharacterSheetFieldValue,
  type CharacterSheetField,
} from "@/features/Characters";
import { type ApiStorage } from "@/api";
import { fakeCharacters, fakeGames } from "./fakeData";
import { localStorageCrud } from "./crud";

const gamesCrud = localStorageCrud("games", fakeGames);
const charactersCrud = localStorageCrud<Character>(
  "characters",
  fakeCharacters
);
const getCharacterFieldsCrud = (characterId) =>
  localStorageCrud<CharacterSheetFieldValue>(characterId + "-characterFields");

export const createApiStoreLocalStorage = (): ApiStorage => {
  appLogger.info("Created api local storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return fakeGames;
    },
    getCharactersByGameId: async (gameId: string) => {
      return charactersCrud.filter((c) => c.game.id === gameId);
    },
    createCharacter: async (gameId: string, fields: CharacterSheetField[]) => {
      throw new Error("Not implemented");
    },
    removeCharacterById: async (characterId: string) => {
      throw new Error("Not implemented");
    },
    getGameFieldValuesByCharacterId: async (characterId: string) => {
      return getCharacterFieldsCrud(characterId).filter(
        (field) => field.characterId === characterId
      );
    },
    createOrUpdateCharacterFieldValue: async (
      characterId: string,
      value: any,
      gameFieldId: string,
      fieldId?: string
    ) => {
      const crud = getCharacterFieldsCrud(characterId);
      if (!fieldId) {
        return crud.create({ characterId, gameFieldId, value });
      }
      let field = await crud.read(fieldId);
      if (field) {
        field = await crud.update(field.id!, { ...field, value });
        return field;
      }
      field = await crud.create({ characterId, id: fieldId, value });
      return field;
    },
    removeField: async (characterId: string, fieldId: string) => {
      const crud = getCharacterFieldsCrud(characterId);
      const list = await crud.filter();
      const index = list.findIndex((f) => f.gameFieldId === fieldId);
      if (index > -1) {
        await crud.delete(list[index].id!);
      }
    },
  });
};

export default createApiStoreLocalStorage;
