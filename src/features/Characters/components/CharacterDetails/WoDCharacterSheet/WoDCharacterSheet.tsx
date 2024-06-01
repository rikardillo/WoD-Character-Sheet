import { useMemo } from "react";

import { CombatContainer } from "@/common/components/Layout/Container";
import Content from "@/common/components/Layout/Content";

import { type CharacterDetailsProps } from "@/features/Characters/components/CharacterDetails";

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
import { type CharacterSheetField } from "@/features/Characters";

export const infoFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-info-name",
    type: "input",
    title: "Name",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-age",
    type: "input",
    title: "Age",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-player",
    type: "input",
    title: "Player",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-virtue",
    type: "input",
    title: "Virtue",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-vice",
    type: "input",
    title: "Vice",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-concept",
    type: "input",
    title: "Concept",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-chronical",
    type: "input",
    title: "Chronical",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-faction",
    type: "input",
    title: "Faction",
    groupId: "wod-info",
  },
  {
    gameFieldId: "wod-info-group-name",
    type: "input",
    title: "Group Name",
    groupId: "wod-info",
  },
];

const attributesFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-attrs-intelligence",
    type: "rating",
    title: "Intelligence",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-wits",
    type: "rating",
    title: "Wits",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-resolve",
    type: "rating",
    title: "Resolve",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-strength",
    type: "rating",
    title: "Strength",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-dexterity",
    type: "rating",
    title: "Dexterity",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-stamina",
    type: "rating",
    title: "Stamina",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-presence",
    type: "rating",
    title: "Presence",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-manipulation",
    type: "rating",
    title: "Manipulation",
    groupId: "wod-attrs",
  },
  {
    gameFieldId: "wod-attrs-composure",
    type: "rating",
    title: "Composure",
    groupId: "wod-attrs",
  },
];

const skillsFields: CharacterSheetField[] = [
  {
    gameFieldId: "wod-info-academics",
    type: "rating",
    title: "Name",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-computer",
    type: "rating",
    title: "Computer",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-crafts",
    type: "rating",
    title: "Crafts",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-investigation",
    type: "rating",
    title: "Investigation",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-medicine",
    type: "rating",
    title: "Medicine",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-occult",
    type: "rating",
    title: "Occult",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-politics",
    type: "rating",
    title: "Politics",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-science",
    type: "rating",
    title: "Science",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-athletics",
    type: "rating",
    title: "Athletics",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-brawl",
    type: "rating",
    title: "Brawl",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-drive",
    type: "rating",
    title: "Drive",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-firearms",
    type: "rating",
    title: "Firearms",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-larceny",
    type: "rating",
    title: "Larceny",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-stealth",
    type: "rating",
    title: "Stealth",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-survival",
    type: "rating",
    title: "Survival",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-weaponary",
    type: "rating",
    title: "Weaponary",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-animal-ken",
    type: "rating",
    title: "Animal Ken",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-empathy",
    type: "rating",
    title: "Empathy",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-expression",
    type: "rating",
    title: "Expression",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-intimidation",
    type: "rating",
    title: "Intimidation",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-persuasion",
    type: "rating",
    title: "Persuasion",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-socialize",
    type: "rating",
    title: "Socialize",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-streetwise",
    type: "rating",
    title: "Streetwise",
    groupId: "wod-skills",
  },
  {
    gameFieldId: "wod-info-subterfuge",
    type: "rating",
    title: "Subterfuge",
    groupId: "wod-skills",
  },
];

export const WoDCharacterSheet = ({
  fieldValues,
  onUpdateField,
  onRemoveField,
}: CharacterDetailsProps) => {
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

export default WoDCharacterSheet;
