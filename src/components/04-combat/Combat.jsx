import Input from "../inputs/Input";
import styled from "styled-components";
import { mixinFlex, container, hoverHighlight } from "../../mixins/mixins";
import { useState } from "react";

// STYLES

const ContainerMain = styled.div`
  ${mixinFlex("column", "space-between")};
  ${container}
  width: 10rem;
  flex-grow: 1;
  gap: 0.4rem;

  @media (width <= 500px) {
    width: 100%;
    height: fit-content;
  }
`;
const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  gap: 0.8rem;

  @media (width <= 500px) {
    display: flex;
    flex-direction: row;
    /* height: 2rem; */
  }
`;

const CombatStatContainer = styled.div`
  ${mixinFlex("column")};

  p {
    font-size: 0.4rem;
    text-transform: uppercase;
  }
  @media (width <= 500px) {
    width: 100%;
    height: fit-content;
  }
`;

const StyledInfoGroup = styled.div`
  width: 100%;
  display: flex;
  grid-column: 1/3;

  @media (width <= 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledEntry = styled.div`
  ${mixinFlex('column')}
  width: 100%;
  height: 100%;
  gap: 0.4rem;
  padding: 2px;

  @media (width <= 500px) {
  }
`;
const StyledTitle = styled.div`
  ${mixinFlex("", "center", "center")}
  width: 100%;
  height: 100%;
  font-size: 8px;
  text-transform: uppercase;
  line-height: 1.4;

  @media (width <= 500px) {
    flex-direction: column;
  }
`;

// COMPONENTS

const CombatStat = function ({ value, title }) {
  return (
    <CombatStatContainer>
      <div
        style={{
          fontSize: "16px",
        }}
      >
        {value}
      </div>
      <p>{title}</p>
    </CombatStatContainer>
  );
};
const InputStat = function ({ value, title }) {
  return (
    <CombatStatContainer>
      <Input entry={value} />
      <p>{title}</p>
    </CombatStatContainer>
  );
};

// COMPONENT

export default function Combat({ att }) {
  const int = att[0].rating;
  const wit = att[1].rating;
  const res = att[2].rating;
  const str = att[3].rating;
  const dex = att[4].rating;
  const sta = att[5].rating;
  const pre = att[6].rating;
  const man = att[7].rating;
  const com = att[8].rating;

  const speed = str + dex;
  const initiative = dex + wit;
  const defense = dex <= wit ? dex : wit;

  const combatValues = [
    { title: "Armor", rating: 1 },
    { title: "XP", rating: 1 },
  ];

  return (
    <ContainerMain>
      <h3>Combat</h3>
      <ContainerContent>
        <CombatStat value="5" title="size" />
        <CombatStat value={speed} title="speed" />
        <CombatStat value={defense} title="defense" />
        <CombatStat value={initiative} title="initiative" />
        <StyledInfoGroup>
          {combatValues.map((item, index) => (
            <StyledEntry key={index}>
              <Input entry={item.entry} id={item.title} />
              <StyledTitle>{item.title}</StyledTitle>
            </StyledEntry>
          ))}
        </StyledInfoGroup>
      </ContainerContent>
    </ContainerMain>
  );
}
