import Content from "@/common/components/Layout/Content";
import WoDCharacterSheet from "./WoDCharacterSheet";

import { type CharacterSheetField } from "@/features/Characters";
import { useLoader } from "@/store/hooks";

export type CharacterDetailsProps = {
  characterSheetFields: CharacterSheetField[];
};

function NotFoundCharacterSheet() {
  return <></>;
}

const CharacterSheetById = {
  wod: WoDCharacterSheet,
  none: NotFoundCharacterSheet,
};

export const CharacterDetails = ({
  characterSheetFields,
  ...props
}: CharacterDetailsProps) => {
  const { currentCharacter } = useLoader();
  const CharacterSheetComponent = !!currentCharacter
    ? CharacterSheetById[currentCharacter.game.slug] || CharacterSheetById.none
    : CharacterSheetById.none;
  return (
    <Content data-testid="content-character-details">
      <CharacterSheetComponent
        characterSheetFields={characterSheetFields}
        {...props}
      />
    </Content>
  );
};

export default CharacterDetails;
