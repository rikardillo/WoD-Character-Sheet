import Content from "@/common/components/Layout/Content";
import WoDCharacterSheet from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet";
import DnDCharacterSheet from "@/features/Characters/components/CharacterDetails/DnDCharacterSheet";

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

export type SectionProps = Pick<
  CharacterDetailsProps,
  "fieldValues" | "onUpdateField"
> & {
  fields: CharacterSheetField[];
};

function NotFoundCharacterSheet() {
  return <></>;
}

const CharacterSheetById = {
  wod: WoDCharacterSheet,
  dnd: DnDCharacterSheet,
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
