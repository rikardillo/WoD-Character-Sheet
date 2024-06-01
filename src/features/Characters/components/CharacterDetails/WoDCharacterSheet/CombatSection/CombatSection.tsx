import { type SectionProps } from "@/features/Characters/components/CharacterDetails";
import {
  CombatStatContainer,
  ContainerMain,
  ContainerContent,
  StyledInfoGroup,
  StyledEntry,
  StyledTitle,
} from "./CombatSection.styles";
import { InputText } from "@/common/components/Inputs";
import { Counter } from "@/common/components/Inputs/Counter";
import { useCharacterFieldValueByGameFieldId } from "@/store/hooks";

export const CombatStat = function ({ value, title }) {
  return (
    <CombatStatContainer>
      <div
        style={{
          fontSize: "16px",
        }}
      >
        {value}
      </div>
      <p>{title}</p>
    </CombatStatContainer>
  );
};

export const CombatSection = ({
  fieldValues,
  onUpdateField,
}: Omit<SectionProps, "fields">) => {
  const wit = useCharacterFieldValueByGameFieldId("wod-attrs-wits")?.value ?? 1;
  const str =
    useCharacterFieldValueByGameFieldId("wod-attrs-strength")?.value ?? 1;
  const dex =
    useCharacterFieldValueByGameFieldId("wod-attrs-dexterity")?.value ?? 1;

  const speed = str + dex;
  const initiative = dex + wit;
  const defense = dex <= wit ? dex : wit;

  const handleChangeCounter =
    (gameFieldId: string, fieldValueId?: string) => (value: number) => {
      onUpdateField(value, gameFieldId, fieldValueId);
    };
  const armor = fieldValues["wod-combat-armor"] ?? { value: 0 };
  const experience = fieldValues["wod-combat-xp"] ?? { value: 0 };

  return (
    <ContainerMain>
      <h3>Combat</h3>
      <ContainerContent>
        <CombatStat value="5" title="size" />
        <CombatStat value={speed} title="speed" />
        <CombatStat value={defense} title="defense" />
        <CombatStat value={initiative} title="initiative" />
        <StyledInfoGroup>
          <Counter
            label="Armor"
            onChange={handleChangeCounter("wod-combat-armor", armor?.id)}
            value={armor?.value}
            key={`wod-combat-armor-${armor?.value}-${armor.updatedAt || ""}`}
          />
          <Counter
            label="XP"
            onChange={handleChangeCounter("wod-combat-xp", experience?.id)}
            key={`wod-combat-xp-${experience?.value}-${
              experience.updatedAt || ""
            }`}
            value={experience?.value}
          />
        </StyledInfoGroup>
      </ContainerContent>
    </ContainerMain>
  );
};

export default CombatSection;
