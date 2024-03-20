import { Container } from "@/components/Containers";
import CharacterInfo from "./components/CharacterInfo";
import { CharacterSheetForm } from ".";
import InputText from "@/components/Input/InputText";
import { useTranslation } from "react-i18next";

const WoDCharacterSheet: CharacterSheetForm = {
  information: [
    { id: "name" },
    { id: "age" },
    { id: "player" },
    { id: "virtue" },
    { id: "vice" },
    { id: "concept" },
    { id: "chronicle" },
    { id: "faction" },
    { id: "group-name" },
  ],
  attributes: [],
  skills: [],
  otherTraits: [],
};

const VampireSheet = {};

export const CharacterSheet = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container id="character-sheet">
        <CharacterInfo
          data={WoDCharacterSheet.information}
          id="character-info"
        />
      </Container>
    </>
  );
};

export default CharacterSheet;
