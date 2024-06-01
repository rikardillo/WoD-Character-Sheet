import WoDLogoImageUrl from "@/assets/images/wod-logo.svg";
import WoDBackgroundImageUrl from "@/assets/images/wod-bg.jpeg";
import DnDLogoImageUrl from "@/assets/images/dnd-logo.png";
import DnDBackgroundImageUrl from "@/assets/images/dnd-bg-02.jpeg";

import { type Game } from "@/features/Games";

export const fakeGames: Game[] = [
  {
    id: "6d73df39-a71a-415f-84c7-538f2613ff3b",
    title: "WoD (World of Darkness)",
    slug: "wod",
    logoImageUrl: WoDLogoImageUrl,
    backgroundImageUrl: WoDBackgroundImageUrl,
  },
  {
    id: "c40f5e59-7c11-4626-a28d-d5cae9024af8",
    title: "D&D (Dugeons and Dragons)",
    slug: "dnd",
    logoImageUrl: DnDLogoImageUrl,
    backgroundImageUrl: DnDBackgroundImageUrl,
  },
];
