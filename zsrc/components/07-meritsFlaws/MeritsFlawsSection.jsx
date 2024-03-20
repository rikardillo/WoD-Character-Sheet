import styled from "styled-components";
import Flaws from "./Flaws";
import Merits from "./Merits";
import { mixinFlex, container } from "../../mixins/mixins";

const SectionContainer = styled.div`
  ${mixinFlex("column", "center", "center")};
  ${container};
  width: 50%;
`;

export default function MeritsFlawsSection() {
  return (
    <SectionContainer>
      <Merits />
      <Flaws />
    </SectionContainer>
  );
}
