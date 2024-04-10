import styled from "styled-components";
import Flaws from "./Flaws";
import Merits from "./Merits";
import { mixinFlex, container } from "../../mixins/mixins";

const SectionContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  ${container};
  width: 100%;

  @media (width <= 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default function MeritsFlawsSection() {
  return (
    <SectionContainer>
      <Merits />
      <Flaws />
    </SectionContainer>
  );
}
