import appLogger, { loggerMethodsMiddleware } from "@/common/utils/logger";
import { type ApiStorage } from ".";
import { CharacterSheetField } from "@/features/Characters";

export const createApiStoreFirebase = (): ApiStorage => {
  appLogger.info("Created api firebase storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      throw new Error("Not implemented");
    },
    getCharactersByGameId: async (gameId: string) => {
      throw new Error("Not implemented");
    },
    createCharacter: async (gameId: string, fields: CharacterSheetField[]) => {
      throw new Error("Not implemented");
    },
    getGameFieldsByCharacterId: async (characterId: string) => {
      throw new Error("Not implemented");
    },
    addField: async (
      characterId: string,
      field: Partial<CharacterSheetField>
    ) => {
      throw new Error("Not implemented");
    },
    updateField: async (
      characterId: string,
      field: Partial<CharacterSheetField>
    ) => {
      throw new Error("Not implemented");
    },
    removeField: async (fieldId: string) => {
      throw new Error("Not implemented");
    },
  });
};
