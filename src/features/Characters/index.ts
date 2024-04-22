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

/*
  {
    gameFieldId: 'dnd-abilities-saving-throws',
    title: 'Saving Throws',
    
  }
*/

export type CharacterSheetFieldValue = {
  id?: string;
  characterId: string;
  gameFieldId: string;
  value: any;
};

export type Character = {
  id: string;
  game: Game;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};
