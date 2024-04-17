import { useMemo } from "react";
import { type CharacterDetailsProps } from "..";
import { type CharacterSheetField } from "@/features/Characters";

import InfoSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/InfoSection";
import AttributesSection from "./AttributesSection";
import Content from "@/common/components/Layout/Content";

export type SectionProps = Pick<
  CharacterDetailsProps,
  "fieldValues" | "onUpdateField"
> & {
  fields: CharacterSheetField[];
};

export const WoDCharacterSheet = ({
  characterSheetFields,
  fieldValues,
  onUpdateField,
}: CharacterDetailsProps) => {
  const infoFields = useMemo(
    () =>
      characterSheetFields.filter((field) => field?.group?.id === "wod-info"),
    [characterSheetFields]
  );
  const attributesFields = useMemo(
    () =>
      characterSheetFields.filter((field) => field?.group?.id === "wod-attrs"),
    [characterSheetFields]
  );
  return (
    <Content className="content">
      <InfoSection
        fields={infoFields}
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
      />
      <AttributesSection
        fields={attributesFields}
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
      />
    </Content>
  );
};

export default WoDCharacterSheet;
