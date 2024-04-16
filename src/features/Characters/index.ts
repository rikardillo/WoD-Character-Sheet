import { type Game } from "@/features/Games";

export type CharacterSheetField = {
  id: string;
  title: string;
  value?: any;
  characterId?: string;
  type?: "input" | "checkbox";
  group?: {
    id: string;
    name: string;
  };
};

export type Character = {
  id: string;
  game: Game;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CharacterSheet = Character & {
  fields: CharacterSheetField[];
};
