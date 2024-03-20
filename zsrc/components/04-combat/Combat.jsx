import styled from "styled-components";
import { mixinFlex, container,hoverHighlight } from "../../mixins/mixins";

// STYLES

const ContainerMain = styled.div`
  ${mixinFlex("column","space-between")};
  ${container}
  gap: .4rem;
`;
const ContainerContent = styled.div`
  ${mixinFlex("column","space-between")};
  height: 85%;
  gap: .8rem;
`;

const CombatStatContainer = styled.div`
  ${mixinFlex("column")};
  
  p {
    font-size: 0.4rem;
    text-transform: uppercase;
  }
`;

// COMPONENTS

const CombatStat = function ({ value, title }) {
  return (
    <CombatStatContainer>
      <h3>{value}</h3>
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
