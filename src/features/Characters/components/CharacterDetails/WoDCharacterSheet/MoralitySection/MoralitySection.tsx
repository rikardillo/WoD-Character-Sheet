import { useState } from "react";

import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import { InputText, Counter } from "@/common/components";
import {
  SectionContainer,
  Container,
  StyledEntry,
} from "./MoralitySection.styles";

export const MoralitySection = ({
  fieldValues,
  onUpdateField,
}: SectionProps) => {
  const derangements = fieldValues["wod-derangements"] ?? { value: "" };
  const morality = fieldValues["wod-morality"] ?? { value: 0 };

  const handleChangeValue =
    (gameFieldId: string, fieldValueId?: string) => (value: any) => {
      onUpdateField(value, gameFieldId, fieldValueId);
    };

  return (
    <SectionContainer className="section-container">
      <Container className="container !flex-col">
        <StyledEntry className="styledEntry !flex-row items-center justify-center">
          <h4>Morality</h4>
          <Counter
            key={`wod-morality-${morality?.value}-${morality.updatedAt || ""}`}
            className="!mt-2"
            value={morality.value}
            onChange={handleChangeValue("wod-morality", morality.id)}
          />
        </StyledEntry>
        <StyledEntry>
          <h4>Derangement(s)</h4>
          <InputText
            key={`wod-derangements-${derangements?.value}-${
              derangements.updatedAt || ""
            }`}
            containerProps={{
              className: "!h-[12px]",
            }}
            defaultValue={derangements.value || ""}
            onChange={handleChangeValue("wod-derangements", derangements.id)}
          />
        </StyledEntry>
      </Container>
    </SectionContainer>
  );
};

export default MoralitySection;
