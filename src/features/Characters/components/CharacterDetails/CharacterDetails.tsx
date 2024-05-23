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
  fieldValues: { [key: string]: CharacterSheetFieldValue };
  onUpdateField: (value: any, gameFieldId: string, id?: string) => void;
  onRemoveField?: (gameFieldId: string) => void;
};

export type SectionProps = Omit<
  CharacterDetailsProps,
  "characterSheetFields"
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
  const { currentCharacter, currentGame } = useLoader();
  const CharacterSheetComponent = !!currentCharacter
    ? CharacterSheetById[currentGame!.slug] || CharacterSheetById.none
    : CharacterSheetById.none;
  return (
    <Content data-testid="content-character-details">
      <CharacterSheetComponent {...props} />
    </Content>
  );
};

export default CharacterDetails;
