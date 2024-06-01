import { type Game } from "@/features/Games";

export type CharacterSheetField = {
  gameFieldId: string;
  title: string;
  type: "input" | "checkbox" | "rating";
  groupId?: string;
  updatedAt?: string;
};

export type CharacterSheetFieldValue<T = any> = {
  id: string;
  characterId: string;
  gameFieldId: string;
  value: T;
  updatedAt?: string;
};

export type Character = {
  id: string;
  gameId: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Equipment = {
  name: string;
  durability: number;
  structure: number;
  size: number;
  cost: number;
};
