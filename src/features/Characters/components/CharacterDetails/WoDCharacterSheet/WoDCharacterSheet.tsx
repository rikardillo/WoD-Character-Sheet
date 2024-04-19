import { useMemo } from "react";

import Content from "@/common/components/Layout/Content";
import { CombatContainer } from "@/common/components/Layout/Container";

import { type CharacterDetailsProps } from "@/features/Characters/components/CharacterDetails";

import InfoSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/InfoSection";
import AttributesSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/AttributesSection";
import SkillsSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/SkillsSection";
import HealthSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/HealthSection";
import Combat from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/CombatSection";
import Morality from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/MoralitySection";

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
  const skillsFields = useMemo(
    () =>
      characterSheetFields.filter((field) => field?.group?.id === "wod-skills"),
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
      <SkillsSection
        fields={skillsFields}
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
      />
      <CombatContainer>
        <HealthSection
          fields={skillsFields}
          fieldValues={fieldValues}
          onUpdateField={onUpdateField}
          // stamina={characterAttributes[5].rating}
          // willpowerStat={
          //   characterAttributes[2].rating + characterAttributes[8].rating
          // }
        />
        <Combat
          fields={skillsFields}
          fieldValues={fieldValues}
          onUpdateField={onUpdateField}
        />
        <Morality
          fields={skillsFields}
          fieldValues={fieldValues}
          onUpdateField={onUpdateField}
        />
      </CombatContainer>
    </Content>
  );
};

export default WoDCharacterSheet;
