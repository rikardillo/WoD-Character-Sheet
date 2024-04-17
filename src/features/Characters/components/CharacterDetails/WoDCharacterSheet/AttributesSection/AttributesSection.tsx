import {
  AttContainer,
  AttSection,
  AttTitleContainer,
  StyledAttribute,
  StyledAttributes,
} from "./AttributesSection.styles";

import { type SectionProps } from "../WoDCharacterSheet";
import DotRating from "@/common/components/Inputs/DotRating";

export const AttributesSection = ({
  fields,
  fieldValues,
  onUpdateField,
}: SectionProps) => {
  return (
    <AttSection>
      <h4>Attributes</h4>
      <AttContainer>
        <AttTitleContainer>
          <p>Power</p>
          <p>Finesse</p>
          <p>Resistance</p>
        </AttTitleContainer>
        <StyledAttributes>
          {fields.map((field) => {
            const fieldValue = fieldValues[field.gameFieldId] ?? {};
            return (
              <StyledAttribute key={field.gameFieldId}>
                <span>{field.title}</span>
                <DotRating
                  id={field.gameFieldId}
                  value={fieldValue.value || 1}
                  maxRating={5}
                  onChange={(value: number) =>
                    onUpdateField(value, field.gameFieldId, fieldValue.id)
                  }
                />
              </StyledAttribute>
            );
          })}
        </StyledAttributes>
      </AttContainer>
    </AttSection>
  );
};

export default AttributesSection;
