import Container from "@/common/components/Layout/Container";
import {
  StyledInfoGroup,
  StyledEntry,
  StyledTitle,
} from "./InfoSection.styles";
import { InputText } from "@/common/components/Inputs";
import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

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
