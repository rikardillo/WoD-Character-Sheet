import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import { DotRating } from "@/common/components";

import {
  SkillSectionContainer,
  SkillContainer,
  StyledSkills,
  StyledSkill,
} from "./SkillsSection.styles";

export const SkillsSection = ({
  fields,
  fieldValues,
  onUpdateField,
}: SectionProps) => {
  return (
    <SkillSectionContainer>
      <h4>Skills</h4>
      <SkillContainer>
        <StyledSkills>
          {fields.map((field) => {
            const fieldValue = fieldValues[field.gameFieldId] ?? {};
            return (
              <StyledSkill key={field.gameFieldId}>
                <span>{field.title}</span>
                <DotRating
                  key={`${field.gameFieldId}-${fieldValue.value}-${
                    fieldValue.updatedAt || ""
                  }`}
                  value={fieldValue.value || 1}
                  maxRating={5}
                  id={field.gameFieldId}
                  onChange={(value) =>
                    onUpdateField(value, field.gameFieldId, fieldValue.id)
                  }
                />
              </StyledSkill>
            );
          })}
        </StyledSkills>
      </SkillContainer>
    </SkillSectionContainer>
  );
};

export default SkillsSection;
