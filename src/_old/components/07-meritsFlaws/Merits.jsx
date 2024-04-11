import styled from "styled-components";
import Input from "../inputs/Input";
import { container, mixinFlex } from "../../mixins/mixins";
import { useState, useEffect } from "react";
import DotRating from "../DotRating";

const Container = styled.div`
  ${mixinFlex("column")}
  ${container};
  width: 100%;
  gap: 0.5rem;
`;

const MeritEntry = styled.div`
  ${mixinFlex("row")};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  display: flex;
  width: 100%;
`;

const AddMerit = function ({ onAdd }) {
  return <button onClick={onAdd}>Add Merit</button>;
};

export default function Merits() {
  const [meritList, setMeritList] = useState(() => {
    const savedList = localStorage.getItem("meritList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("meritList", JSON.stringify(meritList));
  }, [meritList]);
  

  function handleAddMerit() {
    let currentItemIndex = meritList.length + 1;
    const newMerit = meritList.concat({
      id: currentItemIndex,
      merit: [{ title: `Merit ${currentItemIndex}`, entry: "", rating: 0 }],
    });

    setMeritList(newMerit);
  }

  function onChangeMeritValue(id, newRating) {
    // Update the meritList with the new rating
    setMeritList(currentMeritList =>
      currentMeritList.map(merit =>
        ({
          ...merit,
          merit: merit.merit.map(m =>
            m.id === id ? { ...m, rating: newRating } : m // Only update the matched merit
          ),
        })
      )
    );
  }
  

  return (
    <Container>
      <h4>Merits</h4>
      {meritList.map((meritEntry, index) => (
        <MeritEntry key={`Merit Key - ${index}`}>
          {meritEntry.merit.map((item, index) => (
            <StyledEntry key={`${item.title}-${meritEntry.id}`}>
              <Input entry={item.entry} id={`${item.title}-${meritEntry.id}`} />
              <DotRating
                initialRating={item.rating}
                maxRating={5}
                id={`${item.title}`}
                onChange={onChangeMeritValue}
              />
            </StyledEntry>
          ))}
        </MeritEntry>
      ))}
      <AddMerit onAdd={handleAddMerit} />
    </Container>
  );
}
