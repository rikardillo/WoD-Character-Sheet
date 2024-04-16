import DotRating from "../DotRating";
import CheckBox from "@/components/Inputs/CheckBox";

import styled from "styled-components";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";
import { useState } from "react";

const HealthSectionContainer = styled.div`
  ${mixinFlex}
  ${hoverHighlight}
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 0.4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;

  @media (width <= 500px) {
    width: 100%;
  }
`;

const HealthContainer = styled.div`
  ${mixinFlex("row", "flex-start")};
  width: fit-content;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const Container = styled.div`
  ${mixinFlex("column", "center")};
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export default function HealthSection({ willpowerStat, stamina }) {
  const [currentWillpower, setCurrentWillpower] = useState(
    localStorage.getItem("willpower") || willpowerStat
  );

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
            initialRating={currentWillpower}
            maxRating={willpowerStat}
            id="willpower"
            onChange={(id, rating) => localStorage.setItem("willpower", rating)}
          />
        </Container>
      </Container>
    </HealthSectionContainer>
  );
}
