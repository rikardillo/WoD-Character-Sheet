import styled from "styled-components";
import { mixinFlex, container } from "../../mixins/mixins";
import { useState } from "react";
import Input from "../inputs/Input";

// STYLES

const ContainerEquipment = styled.div`
  ${container};
  width: 100%;
  gap: 0.6rem;

  h4 {
    text-align: center;
    width: 100%;
  }

  @media (width <= 500px) {
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

const EquipmentEntry = styled.div`
  ${mixinFlex};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  width: 100%;
`;

// COMPONENT

const AddEquipment = function ({ onAdd }) {
  return <button onClick={onAdd}>Add Equipment</button>;
};

export default function Equipment() {
  const [equipmentList, setEquipmentList] = useState([]);
  const equipment = [
    { title: "Title", entry: "" },
    { title: "Durability", entry: "" },
    { title: "Structure", entry: "" },
    { title: "Size", entry: "" },
    { title: "Cost", entry: "" },
  ];

  function handleAddEquipment() {
    let currentItemIndex = equipmentList.length + 1;

    setEquipmentList([
      ...equipmentList,
      <EquipmentEntry key={equipmentList.length}>
        {equipment.map((item, index) => (
          <StyledEntry key={`${item.title}-${currentItemIndex}`}>
            <Input
              entry={item.entry}
              id={`Equipment-${item.title}-${currentItemIndex}`}
            />
          </StyledEntry>
        ))}
      </EquipmentEntry>,
    ]);


    console.log(equipmentList);
  }

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
        {equipmentList}
        <AddEquipment onAdd={handleAddEquipment} />
      </ContainerEquipment>
    </>
  );
}
