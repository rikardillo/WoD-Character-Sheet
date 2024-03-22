import Input from "../inputs/Input";
import styled from "styled-components";
import { mixinFlex, container, hoverHighlight } from "../../mixins/mixins";
import data from "../../data/attributes";

const att = { ...data };

console.log(data);
console.log(att);

// STYLES

const ContainerMain = styled.div`
  ${mixinFlex("column", "space-between")};
  ${container}
  width: 10rem;
  height: 10rem;
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

// COMPONENTS

const CombatStat = function ({ value, title }) {
  return (
    <CombatStatContainer>
      <Input />
      <p>{title}</p>
    </CombatStatContainer>
  );
};

// COMPONENT

export default function Combat() {
  return (
    <ContainerMain>
      <h3>Combat</h3>
      <ContainerContent>
        <CombatStat value="4" title="size" />
        <CombatStat value="6" title="speed" />
        <CombatStat value="3" title="defense" />
        <CombatStat value="2" title="armor" />
        <CombatStat value="4" title="initiative" />
        <CombatStat value="14" title="xp" />
      </ContainerContent>
    </ContainerMain>
  );
}
