import styled from "styled-components";
import Input from "../inputs/Input";
import { container, mixinFlex } from "../../mixins/mixins";
import React, { useState, useEffect } from "react";
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
    const newMerit = meritList.concat(crypto.randomUUID());
    setMeritList(newMerit);
  }

  function onChangeMeritValue(id, newRating) {
    // Update the meritList with the new rating
    setMeritList((currentMeritList) =>
      currentMeritList.map((merit) => ({
        ...merit,
        merit: merit.merit.map(
          (m) => (m.id === id ? { ...m, rating: newRating } : m) // Only update the matched merit
        ),
      }))
    );
  }

  const onMeritRatingChange = (id, value) => {
    localStorage.setItem(id, value);
  };

  return (
    <Container>
      <h4>Merits</h4>
      {meritList.map((id, index) => {
        return (
          <MeritEntry key={id}>
            <StyledEntry key={`Merit-${id}`}>
              <Input
                entry={localStorage.getItem(`Merit-Title-${id}`) ?? ""}
                id={`Merit-Title-${id}`}
              />
              <DotRating
                initialRating={localStorage.getItem(`Merit-Rating-${id}`)}
                maxRating={5}
                id={`Merit-Rating-${id}`}
                onChange={onMeritRatingChange}
              />
            </StyledEntry>
          </MeritEntry>
        );
      })}
      <button onClick={handleAddMerit}>Add Merit</button>
    </Container>
  );
}
