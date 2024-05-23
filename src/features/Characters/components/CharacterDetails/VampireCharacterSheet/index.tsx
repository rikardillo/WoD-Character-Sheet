import { CombatContainer } from "@/common/components/Layout/Container";
import Content from "@/common/components/Layout/Content";
import InfoSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/InfoSection";
import AttributesSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/AttributesSection";
import SkillsSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/SkillsSection";
import HealthSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/HealthSection";
import Combat from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/CombatSection";
import Morality from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/MoralitySection";
import EquipmentSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/EquipmentSection";
import WeaponSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/WeaponSection";
import MeritsSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/MeritsSection";
import FlawsSection from "@/features/Characters/components/CharacterDetails/WoDCharacterSheet/FlawsSection";

export const VampireCharacterSheet = ({
  fieldValues,
  onUpdateField,
  onRemoveField,
}) => {
  const infoFields = [];
  const attributesFields = [];
  const skillsFields = [];

  return (
    <Content className="content max-w-screen-md m-auto">
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
        />
        <Combat fieldValues={fieldValues} onUpdateField={onUpdateField} />
        <Morality
          fields={skillsFields}
          fieldValues={fieldValues}
          onUpdateField={onUpdateField}
        />
      </CombatContainer>
      <EquipmentSection
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
        onRemoveField={onRemoveField}
      />
      <WeaponSection
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
        onRemoveField={onRemoveField}
      />
      <MeritsSection
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
        onRemoveField={onRemoveField}
      />
      <FlawsSection
        fieldValues={fieldValues}
        onUpdateField={onUpdateField}
        onRemoveField={onRemoveField}
      />
    </Content>
  );
};
