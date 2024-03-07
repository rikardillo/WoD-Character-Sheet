import styled from "styled-components";

import { mixinFlex, container } from "../../mixins/mixins";
import MoralityEntry from "./MoralityEntry";

const SectionContainer = styled.div`
  ${mixinFlex("column", "flex-start", "center")};
  ${container};
  min-width: 15rem;
  gap: 1rem;
`;

export default function Morality() {
  return (
    <SectionContainer>
      <h4>Morality</h4>
      <MoralityEntry />
    </SectionContainer>
  );
}
