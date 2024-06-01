import { appLogger, loggerMethodsMiddleware } from "@/common/utils/logger";
import {
  type Character,
  type CharacterSheetFieldValue,
} from "@/features/Characters";
import { type ApiStorage } from "@/api";
import { fakeGames } from "./fakeData";
import { localStorageCrud } from "./crud";
import { Game } from "@/features/Games";

const gamesCrud = localStorageCrud<Game>("games", fakeGames);
const charactersCrud = localStorageCrud<Character>("characters");
const getCharacterFieldsCrud = (characterId) =>
  localStorageCrud<CharacterSheetFieldValue>(characterId + "-characterFields");

export const createApiStoreLocalStorage = (): ApiStorage => {
  appLogger.info("Created api local storage");

  let api: ApiStorage = {} as ApiStorage;

  api = loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return gamesCrud.filter();
    },
    getCharactersByGameId: async (gameId: string) => {
      return charactersCrud.filter((c) => c.gameId === gameId);
    },
    createCharacter: async (gameId: string, characterName: string) => {
      if (!gameId) {
        return Promise.reject({ detail: "Game id is required" });
      }
      if (!characterName) {
        return Promise.reject({ detail: "Character name is required" });
      }
      const game = await gamesCrud.read(gameId);

      if (!game) {
        return Promise.reject({ detail: "Game not found" });
      }

      const exists = !!(
        await charactersCrud.filter(
          (c) => c.gameId === gameId && c.name === characterName
        )
      ).length;

      if (exists) {
        return Promise.reject({ detail: "Character name already exists" });
      }

      const character = await charactersCrud.create({
        gameId,
        name: characterName,
      });
      await api.createOrUpdateCharacterFieldValue(
        character.id!,
        characterName,
        `${game.slug}-info-name`
      );
      return character;
    },
    removeCharacterById: async (characterId: string) => {
      await charactersCrud.delete(characterId);
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
        if (gameFieldId.endsWith("-info-name")) {
          const character = await charactersCrud.read(characterId);
          const characterExists = await charactersCrud.filter(
            (c) => c.name === value && c.gameId === character?.gameId
          );

          if (characterExists.length > 0) {
            return Promise.reject({ detail: "Character name already created" });
          }

          await charactersCrud.update(characterId, { name: value });
        }

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

  return api;
};

export default createApiStoreLocalStorage;
