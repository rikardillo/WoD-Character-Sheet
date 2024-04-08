import Input from "../inputs/Input";
import DotRating from "../DotRating";
import styled from "styled-components";

import { mixinFlex, container } from "../../mixins/mixins";
import { useBeforeUnload } from "react-router-dom";
import { useState } from "react";

const SectionContainer = styled.div`
  ${mixinFlex("column", "flex-start", "center")};
  ${container};
  width: 100%;
  min-width: 15rem;
  gap: 1rem;
  flex-grow: 1;
  align-self: stretch;
  @media (width <= 900px) {
    width: 100%;
    height: fit-content;
  }
`;

const Container = styled.div`
  ${mixinFlex("")}
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  ${mixinFlex("column")};
  gap: 0.4rem;
  width: 100%;
  height: 100%;

  span {
    width: 2rem;
  }
`;

export default function Morality() {
  const [ morality, setMorality ] = useState();
  const [ derangments, setDerangements ] = useState();

  return (
    <SectionContainer className="section-container">
      <Container>
        <StyledEntry>
          <h4>Morality</h4>
          <Input id='Morality' entry={morality} />
        </StyledEntry>
        <StyledEntry>
          <h4>Derangement(s)</h4>
          <Input id="Derangements" entry={derangments} />
        </StyledEntry>
      </Container>
    </SectionContainer>
  );
}
