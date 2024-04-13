import styled from "styled-components";
import Input from "../inputs/Input";
import { container, mixinFlex } from "../../mixins/mixins";
import React, { useState, useEffect } from "react";
import DotRating from "../DotRating";
import Button from "../Buttons/Button";
import DeleteButton from "../Buttons/DeleteButton";
import RemovalPrompt from "../Utils/RemovalPrompt";

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
  height: 100%;
  gap: 0.4rem;
`;

export default function Merits() {
  const [meritList, setMeritList] = useState(() => {
    const savedList = localStorage.getItem("meritList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [removalId, setRemovalId] = useState(null);

  useEffect(() => {
    localStorage.setItem("meritList", JSON.stringify(meritList));
  }, [meritList]);

  function handleAddMerit() {
    const newMerit = {
      id: crypto.randomUUID(), // Ensuring each merit has a unique ID
      title: "",
      rating: 0, // Assuming you want to track these properties
    };
    setMeritList([...meritList, newMerit]);
  }

  function removeMerit(id) {
    const updatedMerits = meritList.filter((merit) => merit.id !== id);
    setMeritList(updatedMerits);
  }

  const onMeritRatingChange = (id, value) => {
    localStorage.setItem(id, value);
  };

  return (
    <Container>
      <h4>Merits</h4>
      {meritList.map((merit, index) => {
        return (
          <MeritEntry key={merit.id}>
            {removalId === merit.id ? (
              <RemovalPrompt
                removeFunction={removeMerit}
                id={merit.id}
                entry={`merit`}
                setRemovalId={setRemovalId}
              />
            ) : (
              <StyledEntry key={`Merit-${merit.id}`}>
                <Input
                  entry={localStorage.getItem(`Merit-Title-${merit.id}`) ?? ""}
                  id={`Merit-Title-${merit.id}`}
                />
                <DotRating
                  initialRating={localStorage.getItem(
                    `Merit-Rating-${merit.id}`
                  )}
                  maxRating={5}
                  id={`Merit-Rating-${merit.id}`}
                  onChange={(value) => onMeritRatingChange(merit.id, value)}
                />
              </StyledEntry>
            )}
            <DeleteButton onClick={() => setRemovalId(merit.id)} text={`X`} />
          </MeritEntry>
        );
      })}

      <Button onClick={handleAddMerit} text={`+ Add Merit`} />
    </Container>
  );
}
