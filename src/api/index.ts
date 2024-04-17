import {
  type CharacterSheetFieldValue,
  type Character,
  type CharacterSheetField,
} from "@/features/Characters";
import { type Game } from "@/features/Games";

import { createApiStoreFirebase } from "./firebase";
import { createApiStoreLocalStorage } from "./localStorage";

export interface ApiStorage {
  getGames: () => Promise<Game[]>;
  getCharactersByGameId: (gameId: string) => Promise<Character[]>;
  createCharacter: (
    gameId: string,
    fields: CharacterSheetField[]
  ) => Promise<void>;
  getGameFieldValuesByCharacterId: (
    characterId: string
  ) => Promise<CharacterSheetFieldValue[]>;
  removeCharacterById: (characterId: string) => Promise<void>;
  createOrUpdateCharacterFieldValue: (
    characterId: string,
    value: any,
    gameFieldId: string,
    fieldId?: string
  ) => Promise<CharacterSheetField>;
  removeField: (characterId: string, fieldId: string) => Promise<void>;
}

export const createApiStorage = () => {
  return !!import.meta.env.VITE_API_FIREBASE
    ? createApiStoreFirebase()
    : createApiStoreLocalStorage();
};

const apiStorage = createApiStorage();

export default apiStorage;
