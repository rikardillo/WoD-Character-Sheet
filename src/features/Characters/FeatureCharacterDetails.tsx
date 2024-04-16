import { useParams } from "react-router-dom";
import { useState } from "react";

import { type CharacterSheet } from "@/features/Characters";
import CharacterDetails from "./components/CharacterDetails";
import { useLoader } from "@/store/hooks";

export const FeatureCharacterDetails = () => {
  const { currentGame, characterSheetFields } = useLoader();
  // const [characterSheet, setCharacterSheet] = useState<CharacterSheet>({
  //   game: {
  //     id: "wod",
  //     title: "WoD",
  //     defaultFields: [] as any,
  //     pictureUrl: "",
  //   },
  //   fields: [
  //     { id: "info-name", title: "Name" },
  //     { id: "info-age", title: "Age" },
  //     { id: "info-player-name", title: "Player" },
  //     { id: "info-virtue", title: "Virtue" },
  //     { id: "info-vice", title: "Vice" },
  //     { id: "info-concept", title: "Concept" },
  //     { id: "info-chronicle", title: "Chronicle" },
  //     { id: "info-faction", title: "Faction" },
  //     { id: "info-group-name", title: "Group Name" },
  //   ],
  // });
  return (
    <>
      <img src={currentGame?.logoImageUrl} width="256px" />
      <CharacterDetails characterSheetFields={characterSheetFields || []} />
    </>
  );
};

export default FeatureCharacterDetails;
