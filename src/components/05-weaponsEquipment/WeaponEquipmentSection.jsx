import styled from "styled-components";
import Equipment from "./Equipment";
import Weapons from "./Weapons";
import { mixinFlex, container } from "../../mixins/mixins";

// STYLES

const SectionContainer = styled.div`
  ${mixinFlex("column", "center", "center")};
  ${container};
  width: 50%;
`;

// COMPONENT

export default function WeaponsEquipmentSection() {
  return (
    <SectionContainer>
      <Weapons />
      <Equipment />
    </SectionContainer>
  );
}
