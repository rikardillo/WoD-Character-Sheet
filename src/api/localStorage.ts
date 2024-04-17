import { appLogger, loggerMethodsMiddleware } from "@/common/utils/logger";
import { type Game } from "@/features/Games";
import {
  type Character,
  type CharacterSheetField,
} from "@/features/Characters";
import { type ApiStorage } from ".";
import { fakeCharacters, fakeGames } from "./fakeData";

export const localStorageCrud = (
  collection: string,
  initialValue: any[] = []
) => {
  const localStorageKey = `${collection}-db`;

  const setEntities = (data: any[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const loadEntities = (): any[] => {
    return JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  };

  if (loadEntities().length < 1) {
    setEntities(initialValue);
  }

  return {
    create: (entity: any) => {
      const data = loadEntities();
      const result = {
        id: crypto.randomUUID(),
        ...entity,
        createdAt: new Date().toISOString(),
      };
      setEntities(data.concat(result));
      return result;
    },
    read: (id: string) => {
      const data = loadEntities();
      const item = data.find((i) => i.id === id);
      return item;
    },
    filter: (predicate?: (value: any, index: number, array: any[]) => any) => {
      const data = loadEntities();
      return predicate ? data.filter(predicate) : data;
    },
    update: (id: string, payload: any) => {
      const data = loadEntities();
      const index = data.findIndex((i) => i.id === id);
      if (index > -1) {
        data[index] = {
          ...data[index],
          ...payload,
          updatedAt: new Date().toISOString(),
        };
      }
      setEntities(data);
      return data[index];
    },
    delete: (id: string) => {
      const data = loadEntities();
      setEntities(data.filter((i) => i.id !== id));
      return;
    },
  };
};

const gamesCrud = localStorageCrud("games", fakeGames);
const charactersCrud = localStorageCrud("characters", fakeCharacters);
const getCharacterFieldsCrud = (characterId) =>
  localStorageCrud(characterId + "-characterFields");

export const createApiStoreLocalStorage = (): ApiStorage => {
  appLogger.info("Created api local storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return gamesCrud.filter();
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
      let field = crud.read(fieldId);
      if (field) {
        field = crud.update(field.id, { ...field, value });
        return field;
      }
      field = crud.create({ characterId, fieldId, value });
      return field;
    },
    removeField: async (fieldId: string) => {
      throw new Error("Not implemented");
    },
  });
};
