import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import {
  HealthSectionContainer,
  Container,
  HealthContainer,
} from "./HealthSection.styles";
import { CheckBox } from "@/common/components/Inputs";
import DotRating from "@/common/components/Inputs/DotRating";
import { useMemo, useState } from "react";
import { useCharacterFieldValueByGameFieldId } from "@/store/hooks";

export const HealthSection = ({ onUpdateField, fieldValues }: SectionProps) => {
  const stamina =
    useCharacterFieldValueByGameFieldId("wod-attrs-stamina")?.value ?? 1;
  const resolve =
    useCharacterFieldValueByGameFieldId("wod-attrs-resolve")?.value ?? 1;
  const composure =
    useCharacterFieldValueByGameFieldId("wod-attrs-composure")?.value ?? 1;

  console.log(composure);

  const healthInputs = useMemo(() => {
    return new Array(stamina + 5).fill(null).map((_, index) => {
      const gameFieldId = `wod-health-${index}`;
      const fieldValue = fieldValues[gameFieldId];
      return (
        <CheckBox
          key={index}
          id={gameFieldId}
          value={fieldValue?.value}
          onChange={(value) => {
            onUpdateField(value, gameFieldId, fieldValue?.id);
          }}
        />
      );
    });
  }, [stamina, fieldValues]);

  const willpowerId = `wod-health-willpower`;
  const willpowerFieldValue = fieldValues[willpowerId] ?? {};

  return (
    <HealthSectionContainer>
      <Container>
        <>
          <h4>Health</h4>
          <HealthContainer>{healthInputs}</HealthContainer>
        </>
        <Container>
          <h4>Willpower</h4>
          <DotRating
            value={willpowerFieldValue.value || 0}
            maxRating={resolve + composure}
            id={willpowerId}
            onChange={(value) => {
              onUpdateField(value, willpowerId, willpowerFieldValue?.id);
            }}
          />
        </Container>
      </Container>
    </HealthSectionContainer>
  );
};

export default HealthSection;
