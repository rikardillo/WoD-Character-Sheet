import WoDLogoImageUrl from "@/assets/images/wod-logo.svg";
import WoDBackgroundImageUrl from "@/assets/images/wod-bg.jpeg";
import DnDLogoImageUrl from "@/assets/images/dnd-logo.png";
import DnDBackgroundImageUrl from "@/assets/images/dnd-bg-02.jpeg";

import {
  type CharacterSheetField,
  type Character,
} from "@/features/Characters";
import { type Game } from "@/features/Games";

const infoGroup = {
  id: "wod-info",
  name: "Information",
};

const infoFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-info-name",
    type: "input",
    title: "Name",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-age",
    type: "input",
    title: "Age",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-player",
    type: "input",
    title: "Player",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-virtue",
    type: "input",
    title: "Virtue",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-vice",
    type: "input",
    title: "Vice",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-concept",
    type: "input",
    title: "Concept",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-chronical",
    type: "input",
    title: "Chronical",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-faction",
    type: "input",
    title: "Faction",
    group: infoGroup,
  },
  {
    gameFieldId: "wod-info-group-name",
    type: "input",
    title: "Group Name",
    group: infoGroup,
  },
];

const attrGroup = {
  id: "wod-attrs",
  name: "Attributes",
};

const attrFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-attrs-intelligence",
    type: "rating",
    title: "Intelligence",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-wits",
    type: "rating",
    title: "Wits",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-resolve",
    type: "rating",
    title: "Resolve",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-strength",
    type: "rating",
    title: "Strength",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-dexterity",
    type: "rating",
    title: "Dexterity",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-stamina",
    type: "rating",
    title: "Stamina",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-presence",
    type: "rating",
    title: "Presence",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-manipulation",
    type: "rating",
    title: "Manipulation",
    group: attrGroup,
  },
  {
    gameFieldId: "wod-attrs-composure",
    type: "rating",
    title: "Composure",
    group: attrGroup,
  },
];

const skillsGroup = {
  id: "wod-skills",
  name: "Skills",
};

const skillsFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-info-academics",
    type: "rating",
    title: "Name",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-computer",
    type: "rating",
    title: "Computer",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-crafts",
    type: "rating",
    title: "Crafts",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-investigation",
    type: "rating",
    title: "Investigation",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-medicine",
    type: "rating",
    title: "Medicine",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-occult",
    type: "rating",
    title: "Occult",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-politics",
    type: "rating",
    title: "Politics",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-science",
    type: "rating",
    title: "Science",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-athletics",
    type: "rating",
    title: "Athletics",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-brawl",
    type: "rating",
    title: "Brawl",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-drive",
    type: "rating",
    title: "Drive",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-firearms",
    type: "rating",
    title: "Firearms",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-larceny",
    type: "rating",
    title: "Larceny",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-stealth",
    type: "rating",
    title: "Stealth",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-survival",
    type: "rating",
    title: "Survival",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-weaponary",
    type: "rating",
    title: "Weaponary",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-animal-ken",
    type: "rating",
    title: "Animal Ken",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-empathy",
    type: "rating",
    title: "Empathy",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-expression",
    type: "rating",
    title: "Expression",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-intimidation",
    type: "rating",
    title: "Intimidation",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-persuasion",
    type: "rating",
    title: "Persuasion",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-socialize",
    type: "rating",
    title: "Socialize",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-streetwise",
    type: "rating",
    title: "Streetwise",
    group: skillsGroup,
  },
  {
    gameFieldId: "wod-info-subterfuge",
    type: "rating",
    title: "Subterfuge",
    group: skillsGroup,
  },
];

export const fakeGames: Game[] = [
  {
    id: "6d73df39-a71a-415f-84c7-538f2613ff3b",
    title: "WoD (World of Darkness)",
    slug: "wod",
    logoImageUrl: WoDLogoImageUrl,
    backgroundImageUrl: WoDBackgroundImageUrl,
    sheetFields: [...infoFields, ...attrFields, ...skillsFields],
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

export const fakeCharacters: Character[] = [
  {
    id: "02a901a2-b533-4668-8818-950fe96991ed",
    game: fakeGames[0],
    name: "Teta De Mango",
  },
  {
    id: "e3a92126-c13d-4db7-8be0-2f4ef71f039d",
    game: fakeGames[1],
    name: "Teta De Mango 2",
  },
];
