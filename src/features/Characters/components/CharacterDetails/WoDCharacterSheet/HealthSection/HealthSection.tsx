import { useMemo } from "react";

import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import {
  HealthSectionContainer,
  Container,
  HealthContainer,
} from "./HealthSection.styles";

import { useCharacterFieldValueByGameFieldId } from "@/store/hooks";
import { DotRating, CheckBox } from "@/common/components";

export const HealthSection = ({ onUpdateField, fieldValues }: SectionProps) => {
  const stamina =
    useCharacterFieldValueByGameFieldId("wod-attrs-stamina")?.value ?? 1;
  const resolve =
    useCharacterFieldValueByGameFieldId("wod-attrs-resolve")?.value ?? 1;
  const composure =
    useCharacterFieldValueByGameFieldId("wod-attrs-composure")?.value ?? 1;

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
  const willpowerFieldValue = fieldValues[willpowerId] ?? { value: 0 };

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
            value={willpowerFieldValue.value}
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
