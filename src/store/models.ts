// @filename: models.ts
import { Models } from "@rematch/core";
import { state as game } from "@/features/Games/state";
import { state as characters } from "@/features/Characters/state";

export interface RootModel extends Models<RootModel> {
  game: typeof game;
  characters: typeof characters;
}

export const models: RootModel = {
  game,
  characters,
};
