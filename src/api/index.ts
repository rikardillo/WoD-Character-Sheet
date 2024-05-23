import {
  type CharacterSheetFieldValue,
  type Character,
  type CharacterSheetField,
  type Equipment,
} from "@/features/Characters";
import { type Game } from "@/features/Games";

import { createApiStoreFirebase } from "./firebase";
import { createApiStoreLocalStorage } from "./localStorage";

export type Crud<T> = {
  create: (payload: Partial<T>) => Promise<T>;
  read: (id: string) => Promise<T>;
  filter: (
    predicate?: (value: any, index: number, array: any[]) => any
  ) => Promise<T[]>;
  update: (id: string, payload: Partial<T>) => Promise<T>;
  delete: (id: string) => Promise<T>;
};

export interface ApiStorage {
  getGames: () => Promise<Game[]>;
  getCharactersByGameId: (gameId: string) => Promise<Character[]>;
  createCharacter: (
    gameId: string,
    characterName: string
  ) => Promise<Character>;
  getGameFieldValuesByCharacterId: (
    characterId: string
  ) => Promise<CharacterSheetFieldValue[]>;
  removeCharacterById: (characterId: string) => Promise<void>;
  createOrUpdateCharacterFieldValue: (
    characterId: string,
    value: any,
    gameFieldId: string,
    fieldId?: string
  ) => Promise<CharacterSheetFieldValue>;
  removeField: (characterId: string, fieldId: string) => Promise<void>;
}

export const createApiStorage = () => {
  return !!import.meta.env.VITE_API_FIREBASE
    ? createApiStoreFirebase()
    : createApiStoreLocalStorage();
};

const apiStorage = createApiStorage();

export default apiStorage;
