import Input from "../inputs/Input";
import styled from "styled-components";

import { mixinFlex, container } from "../../mixins/mixins";
import { useState } from "react";

const SectionContainer = styled.div`
  ${mixinFlex("column", "flex-start", "center")};
  ${container};
  width: 100%;
  min-width: 15rem;
  gap: 1rem;
  align-self: stretch;
  flex-grow: 1;
`;

const Container = styled.div`
  ${mixinFlex("")}
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  height: 100%;
  gap: 0.2rem;
  flex-grow: 1;
`;

const StyledEntry = styled.div`
  ${mixinFlex("column")};
  gap: 0.4rem;
  width: 100%;
  height: 100%;
  align-self: stretch;
  flex-grow: 1;

  span {
    width: 2rem;
  }
`;

export default function Morality() {
  const [ morality, setMorality ] = useState();
  const [ derangments, setDerangements ] = useState();

  return (
    <SectionContainer className="section-container">
      <Container className="container">
        <StyledEntry className="styledEntry">
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
