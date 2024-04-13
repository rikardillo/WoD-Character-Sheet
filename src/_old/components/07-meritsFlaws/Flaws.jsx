import styled from "styled-components";
import Input from "../inputs/Input";
import { container, mixinFlex } from "../../mixins/mixins";
import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import DeleteButton from "../Buttons/DeleteButton";
import RemovalPrompt from "../Utils/RemovalPrompt";

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
  height: 100%;
  width: 100%;
`;

export default function Flaws() {
  const [flawList, setFlawList] = useState(() => {
    const savedList = localStorage.getItem("flawList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [removalId, setRemovalId] = useState(null);

  useEffect(() => {
    localStorage.setItem("flawList", JSON.stringify(flawList));
  }, [flawList]);

  function handleAddFlaw() {
    let currentItemIndex = crypto.randomUUID();
    const newFlaw = flawList.concat({
      id: currentItemIndex,
      flaw: [{ title: "Flaw", entry: "" }],
    });

    setFlawList(newFlaw);
  }

  function removeFlaw(id) {
    const updatedFlaws = flawList.filter((flaw) => flaw.id !== id);
    setFlawList(updatedFlaws);
  }

  return (
    <Container>
      <h4>Flaws</h4>
      {flawList.map((flawEntry, index) => (
        <FlawEntry key={`Flaw Key - ${index}`}>
          {removalId === flawEntry.id ? (
            <RemovalPrompt
              removeFunction={removeFlaw}
              id={flawEntry.id}
              entry={`flaw`}
              setRemovalId={setRemovalId}
            />
          ) : (
            <>
              <StyledEntry key={`${flawEntry.title}-${flawEntry.id}`}>
                <Input
                  entry={flawEntry.entry}
                  id={`${flawEntry.title}-${flawEntry.id}`}
                />
              </StyledEntry>
              <DeleteButton
                onClick={() => setRemovalId(flawEntry.id)}
                text={`X`}
              />
            </>
          )}
        </FlawEntry>
      ))}
      <Button onClick={handleAddFlaw} text={`+ Add Flaw`} />
    </Container>
  );
}
