import styled from "styled-components";
import { mixinFlex, container } from "../../mixins/mixins";
import { useState, useEffect } from "react";
import Input from "../inputs/Input";
import Button from "../Buttons/Button";
import DeleteButton from "../Buttons/DeleteButton";
import RemovalPrompt from "../Utils/RemovalPrompt";

// STYLES

const ContainerEquipment = styled.div`
  ${mixinFlex("column")}
  ${container};
  width: 100%;
  gap: 0.4rem;

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
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;

  div {
    width: 100%;
  }

  span {
    min-width: 2rem;
    aspect-ratio: 1;
  }
`;

const EquipmentEntry = styled.div`
  ${mixinFlex};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.4rem;
`;

const StyledEntry = styled.div`
  width: 100%;
  height: 100%;
`;

// COMPONENT

const AddEquipment = function ({ onAdd }) {
  return <button onClick={onAdd}>Add Equipment</button>;
};

export default function Equipment() {
  const [equipmentList, setEquipmentList] = useState(() => {
    const savedList = localStorage.getItem("equipmentList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [removalId, setRemovalId] = useState(null);

  useEffect(() => {
    localStorage.setItem("equipmentList", JSON.stringify(equipmentList));
  }, [equipmentList]);

  function handleAddEquipment() {
    let currentItemIndex = crypto.randomUUID();
    const newEquipment = equipmentList.concat({
      id: currentItemIndex,
      equipment: [
        { title: "Equipment/Attack", entry: "" },
        { title: "Dice Mod.", entry: "" },
        { title: "Range", entry: "" },
        { title: "Clip", entry: "" },
        { title: "Size", entry: "" },
      ],
    });

    setEquipmentList(newEquipment);
  }

  function removeEquipment(id) {
    const updatedEquipment = equipmentList.filter((equipment) => equipment.id !== id);
    setEquipmentList(updatedEquipment);
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
          <span></span>
        </EquipmentTitles>
        {equipmentList.map((equipmentEntry, index) => (
          <EquipmentEntry key={equipmentEntry.id}>
            {removalId === equipmentEntry.id ? (
              <RemovalPrompt
                removeFunction={removeEquipment}
                id={equipmentEntry.id}
                entry={`equipment`}
                setRemovalId={setRemovalId}
              />
            ) : (
              <>
                {equipmentEntry.equipment.map((item) => (
                  <StyledEntry key={`${item.title}-${equipmentEntry.id}`}>
                    <Input
                      entry={item.entry}
                      id={`Equipment-${item.title}-${equipmentEntry.id}`}
                    />
                  </StyledEntry>
                ))}
                <DeleteButton
                  onClick={() => setRemovalId(equipmentEntry.id)}
                  text={`X`}
                />
              </>
            )}
          </EquipmentEntry>
        ))}
        <Button onClick={handleAddEquipment} text={`+ Add Equipment`} />
      </ContainerEquipment>
    </>
  );
}
