import appLogger, { loggerMethodsMiddleware } from "@/common/utils/logger";
import { type ApiStorage } from ".";

export const firebaseApiUrl = import.meta.env.VITE_API_FIREBASE;

export const request = (url: string, options: Partial<RequestInit> = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((res) => res.json());
};

export const createApiStoreFirebase = (): ApiStorage => {
  appLogger.info("Created api firebase storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return request(`${firebaseApiUrl}/getGames`);
    },
    getCharactersByGameId: async (gameId: string) => {
      return request(
        `${firebaseApiUrl}/getCharactersByGameId?gameId=${gameId}`
      );
    },
    createCharacter: async (gameId: string, characterName: string) => {
      return request(`${firebaseApiUrl}/createCharacter`, {
        method: "POST",
        body: JSON.stringify({
          gameId,
          characterName,
        }),
      });
    },
    removeCharacterById: (characterId) => {
      return request(
        `${firebaseApiUrl}/removeCharacterById?characterId=${characterId}`,
        {
          method: "DELETE",
        }
      );
    },
    getGameFieldValuesByCharacterId: async (characterId: string) => {
      return request(
        `${firebaseApiUrl}/getGameFieldValuesByCharacterId?characterId=${characterId}`
      );
    },
    createOrUpdateCharacterFieldValue: async (
      characterId: string,
      value: any,
      gameFieldId: string,
      fieldId?: string
    ) => {
      return fetch(`${firebaseApiUrl}/createOrUpdateCharacterFieldValue`, {
        method: "POST",
        body: JSON.stringify({
          characterId,
          value,
          gameFieldId,
          fieldId,
        }),
      }).then((res) => res.json());
    },
    removeField: async (characterId: string, fieldId: string) => {
      return fetch(`${firebaseApiUrl}/removeField`, {
        method: "DELETE",
        body: JSON.stringify({
          characterId,
          fieldId,
        }),
      }).then((res) => res.json());
    },
  });
};
