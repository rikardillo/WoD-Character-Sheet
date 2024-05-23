import appLogger, { loggerMethodsMiddleware } from "@/common/utils/logger";
import { type ApiStorage } from ".";
import {
  CharacterSheetField,
  CharacterSheetFieldValue,
} from "@/features/Characters";

export const firebaseApiUrl = import.meta.env.VITE_API_FIREBASE;

export const createApiStoreFirebase = (): ApiStorage => {
  appLogger.info("Created api firebase storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return fetch(`${firebaseApiUrl}/getGames`).then((res) => res.json());
    },
    getCharactersByGameId: async (gameId: string) => {
      throw new Error("Not implemented");
    },
    createCharacter: async (
      gameId: string,
      fields: CharacterSheetFieldValue[]
    ) => {
      const id = crypto.randomUUID();
      return { id } as any;
    },
    removeCharacterById: (characterId) => {
      throw new Error("Not implemented");
    },
    getGameFieldValuesByCharacterId: async (characterId: string) => {
      throw new Error("Not implemented");
    },
    createOrUpdateCharacterFieldValue: async (
      characterId: string,
      value: any,
      gameFieldId: string,
      fieldId?: string
    ) => {
      throw new Error("Not implemented");
    },
    removeField: async (fieldId: string) => {
      throw new Error("Not implemented");
    },
  });
};
