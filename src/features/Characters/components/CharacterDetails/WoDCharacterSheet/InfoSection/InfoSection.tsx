import Container from "@/common/components/Layout/Container";
import {
  StyledInfoGroup,
  StyledEntry,
  StyledTitle,
} from "./InfoSection.styles";
import { InputText } from "@/common/components/Inputs";
import { type SectionProps } from "@/features/Characters/components/CharacterDetails";
import { useMemo } from "react";

export default function InfoSection({
  fields,
  fieldValues,
  onUpdateField,
}: SectionProps) {
  return (
    <Container>
      <StyledInfoGroup>
        {fields.map((field) => {
          const fieldValue = fieldValues[field.gameFieldId] ?? {};
          return (
            <StyledEntry key={field.gameFieldId}>
              <StyledTitle>{field.title}</StyledTitle>
              <InputText
                key={`${field.gameFieldId}-${fieldValue.value}-${
                  fieldValue.updatedAt || ""
                }`}
                defaultValue={fieldValue.value || ""}
                onChange={(value: any) => {
                  onUpdateField(value, field.gameFieldId, fieldValue.id);
                }}
                id={field.gameFieldId}
                spellCheck={false}
                autoComplete="off"
              />
            </StyledEntry>
          );
        })}
      </StyledInfoGroup>
    </Container>
  );
}
