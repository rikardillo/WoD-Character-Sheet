import { appLogger, loggerMethodsMiddleware } from "@/common/utils/logger";
import { type Game } from "@/features/Games";
import {
  CharacterSheet,
  type Character,
  type CharacterSheetField,
} from "@/features/Characters";
import { type ApiStorage } from ".";

import WoDLogoImageUrl from "@/assets/images/wod-logo.svg";
import WoDBackgroundImageUrl from "@/assets/images/wod-bg.jpeg";
import DnDLogoImageUrl from "@/assets/images/dnd-logo.png";
import DnDBackgroundImageUrl from "@/assets/images/dnd-bg.jpeg";

const infoGroup = {
  id: "wod-info",
  name: "Information",
};

const defaultGames: Game[] = [
  {
    id: "6d73df39-a71a-415f-84c7-538f2613ff3b",
    title: "WoD (World of Darkness)",
    slug: "wod",
    logoImageUrl: WoDLogoImageUrl,
    backgroundImageUrl: WoDBackgroundImageUrl,
    sheetFields: [
      {
        id: "wod-info-name",
        type: "input",
        title: "Name",
        group: infoGroup,
      },
      {
        id: "wod-info-age",
        type: "input",
        title: "Age",
        group: infoGroup,
      },
      {
        id: "wod-info-player",
        type: "input",
        title: "Player",
        group: infoGroup,
      },
      {
        id: "wod-info-vice",
        type: "input",
        title: "Vice",
        group: infoGroup,
      },
      {
        id: "wod-info-concept",
        type: "input",
        title: "Concept",
        group: infoGroup,
      },
      {
        id: "wod-info-chronical",
        type: "input",
        title: "Chronical",
        group: infoGroup,
      },
      {
        id: "wod-info-faction",
        type: "input",
        title: "Faction",
        group: infoGroup,
      },
      {
        id: "wod-info-group-name",
        type: "input",
        title: "Group Name",
        group: infoGroup,
      },
    ],
  },
  {
    id: "c40f5e59-7c11-4626-a28d-d5cae9024af8",
    title: "D&D (Dugeons and Dragons)",
    slug: "dnd",
    logoImageUrl: DnDLogoImageUrl,
    backgroundImageUrl: DnDBackgroundImageUrl,
    sheetFields: [],
  },
];

const defaultCharacters: Character[] = [
  {
    id: "02a901a2-b533-4668-8818-950fe96991ed",
    game: defaultGames[0],
    name: "Teta De Mango",
  },
  {
    id: "e3a92126-c13d-4db7-8be0-2f4ef71f039d",
    game: defaultGames[1],
    name: "Teta De Mango 2",
  },
];

// const fakeCharacterSheet: CharacterSheet = {
//   fields: [] as CharacterSheetField[],
// };

export const createApiStoreLocalStorage = (): ApiStorage => {
  appLogger.info("Created api local storage");

  return loggerMethodsMiddleware<ApiStorage>({
    getGames: async () => {
      return defaultGames;
    },
    getCharactersByGameId: async (gameId: string) => {
      return defaultCharacters.filter((c) => c.game.id === gameId);
    },
    createCharacter: async (gameId: string, fields: CharacterSheetField[]) => {
      throw new Error("Not implemented");
    },
    removeCharacterById: async (characterId: string) => {
      throw new Error("Not implemented");
    },
    getGameFieldsByCharacterId: async (characterId: string) => {
      const character = defaultCharacters.find((c) => c.id === characterId);
      return (
        defaultGames.find((game) => game.id === character?.game.id)
          ?.sheetFields || []
      );
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
