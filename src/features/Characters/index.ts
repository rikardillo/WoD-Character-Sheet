import { type Game } from "@/features/Games";

export type CharacterSheetField = {
  gameFieldId: string;
  title: string;
  type: "input" | "checkbox" | "rating";
  group?: {
    id: string;
    name: string;
  };
};

export type CharacterSheetFieldValue<T = any> = {
  id: string;
  characterId: string;
  gameFieldId: string;
  value: T;
};

export type Character = {
  id: string;
  game: Game;
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
