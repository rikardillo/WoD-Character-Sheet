import { type CharacterSheetField } from "@/features/Characters";

export type Game = {
  id: string;
  slug: string;
  title: string;
  logoImageUrl: string;
  backgroundImageUrl?: string;
};
