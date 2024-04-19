import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import {
  HealthSectionContainer,
  Container,
  HealthContainer,
} from "./HealthSection.styles";
import { CheckBox } from "@/common/components/Inputs";
import DotRating from "@/common/components/Inputs/DotRating";
import { useState } from "react";

export const HealthSection = (props: SectionProps) => {
  const stamina = 2;
  const willpowerStat = 2;
  const [currentWillpower, setCurrentWillpower] = useState(1);

  return (
    <HealthSectionContainer>
      <Container>
        <>
          <h4>Health</h4>
          <HealthContainer>
            {[...Array(stamina + 5)].map((_, index) => (
              <CheckBox
                key={index}
                id={`Health-${index}`}
                onChange={console.log}
              />
            ))}
          </HealthContainer>
        </>
        <Container>
          <h4>Willpower</h4>
          <DotRating
            value={currentWillpower}
            maxRating={willpowerStat}
            id="willpower"
            onChange={(value) => {}}
          />
        </Container>
      </Container>
    </HealthSectionContainer>
  );
};

export default HealthSection;
