import styled from "styled-components";
import { mixinFlex, container } from "../../mixins/mixins";
import EquipmentEntry from "./EquipmentEntry";

// STYLES

const ContainerEquipment = styled.div`
  ${container};
  width: 50%;
  gap: 0.6rem;

  h4 {
    text-align: center;
    width: 100%;
  }
`;

const EquipmentTitles = styled.div`
  ${mixinFlex};
  text-transform: uppercase;
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;

  div {
    width: 100%;
  }
`;

// COMPONENT

export default function Equipment() {
  return (
    <>
      <ContainerEquipment>
        <h4>Equipment</h4>
        <EquipmentTitles>
          <div>Equipment</div>
          <div>Durability</div>
          <div>Structure</div>
          <div>Size</div>
          <div>Cost</div>
        </EquipmentTitles>
        <EquipmentEntry />
        <EquipmentEntry />
        <EquipmentEntry />
      </ContainerEquipment>
    </>
  );
}
