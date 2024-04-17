import Content from "@/common/components/Layout/Content";
import WoDCharacterSheet from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet";

import {
  type CharacterSheetFieldValue,
  type CharacterSheetField,
} from "@/features/Characters";
import { useLoader } from "@/store/hooks";

export type CharacterDetailsProps = {
  characterSheetFields: CharacterSheetField[];
  fieldValues: { [key: string]: any };
  onUpdateField: (
    value: string | number,
    gameFieldId: string,
    id?: string
  ) => void;
};

function NotFoundCharacterSheet() {
  return <></>;
}

const CharacterSheetById = {
  wod: WoDCharacterSheet,
  none: NotFoundCharacterSheet,
};

export const CharacterDetails = (props: CharacterDetailsProps) => {
  const { currentCharacter } = useLoader();
  const CharacterSheetComponent = !!currentCharacter
    ? CharacterSheetById[currentCharacter.game.slug] || CharacterSheetById.none
    : CharacterSheetById.none;
  return (
    <Content data-testid="content-character-details">
      <CharacterSheetComponent {...props} />
    </Content>
  );
};

export default CharacterDetails;
