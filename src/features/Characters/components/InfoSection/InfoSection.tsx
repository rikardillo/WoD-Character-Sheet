import { useState } from "react";

import Container from "@/common/components/Layout/Container";
import {
  StyledInfoGroup,
  StyledEntry,
  StyledTitle,
} from "./InfoSection.styles";
import { InputText } from "@/common/components/Inputs";
import { type CharacterSheetField } from "@/features/Characters";

export type InfoSectionProps = {
  fields: CharacterSheetField[];
};

export default function InfoSection({ fields }: InfoSectionProps) {
  return (
    <Container>
      <StyledInfoGroup>
        {fields.map((field) => (
          <StyledEntry key={field.id}>
            <StyledTitle>{field.title}</StyledTitle>
            <InputText entry={field.value} />
          </StyledEntry>
        ))}
      </StyledInfoGroup>
    </Container>
  );
}
