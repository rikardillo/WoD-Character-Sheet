import styled from "styled-components";
import Input from "../inputs/Input";
import { mixinFlex } from "../../mixins/mixins";

// STYLES

const EquipmentEntry = styled.div`
  ${mixinFlex};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;


`;

// COMPONENT

export default function () {
  return (
    <EquipmentEntry>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </EquipmentEntry>
  );
}
