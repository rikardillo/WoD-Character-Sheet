import styled from "styled-components";
import Input from "../inputs/Input";
import { container, mixinFlex } from "../../mixins/mixins";
import { useState, useEffect } from "react";
import DotRating from "../DotRating";

const Container = styled.div`
  ${mixinFlex("column")};
  ${container};
  width: 100%;
  gap: 0.5rem;
`;

const FlawEntry = styled.div`
  ${mixinFlex};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  width: 100%;
`;

const AddFlaw = function ({ onAdd }) {
  return <button onClick={onAdd}>Add Flaw</button>;
};

export default function Flaws() {
  const [flawList, setFlawList] = useState(() => {
    const savedList = localStorage.getItem("flawList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("flawList", JSON.stringify(flawList));
  }, [flawList]);

  function handleAddFlaw() {
    let currentItemIndex = flawList.length + 1;
    const newFlaw = flawList.concat({
      id: currentItemIndex,
      flaw: [{ title: "Flaw", entry: "" }],
    });

    setFlawList(newFlaw);
  }

  return (
    <Container>
      <h4>Flaws</h4>
      {flawList.map((flawEntry, index) => (
        <FlawEntry key={`Flaw Key - ${index}`}>
          {flawEntry.flaw.map((item) => (
            <StyledEntry key={`${item.title}-${flawEntry.id}`}>
              <Input entry={item.entry} id={`${item.title}-${flawEntry.id}`} />
            </StyledEntry>
          ))}
        </FlawEntry>
      ))}
      <AddFlaw onAdd={handleAddFlaw} />
    </Container>
  );
}
