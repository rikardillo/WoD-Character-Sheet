import {
  type Character,
  type CharacterSheet,
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
  getGameFieldsByCharacterId: (
    characterId: string
  ) => Promise<CharacterSheetField[]>;
  removeCharacterById: (characterId: string) => Promise<void>;
  addField: (
    characterId: string,
    field: Partial<CharacterSheetField>
  ) => Promise<CharacterSheetField>;
  updateField: (
    characterId: string,
    field: Partial<CharacterSheetField>
  ) => Promise<CharacterSheetField>;
  removeField: (fieldId: string) => Promise<void>;
}

export const createApiStorage = () => {
  return !!import.meta.env.VITE_API_FIREBASE
    ? createApiStoreFirebase()
    : createApiStoreLocalStorage();
};

const apiStorage = createApiStorage();

export default apiStorage;
