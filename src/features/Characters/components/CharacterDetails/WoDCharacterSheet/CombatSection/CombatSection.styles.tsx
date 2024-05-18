import { container, mixinFlex } from "@/common/utils/mixins";
import styled from "styled-components";

export const ContainerMain = styled.div`
  ${mixinFlex("column", "space-between")};
  ${container}
  width: 100%;
  align-self: stretch;
  flex-grow: 1;
  gap: 0.4rem;

  @media (width <= 500px) {
    height: fit-content;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.8rem;

  @media (width <= 500px) {
    display: flex;
    flex-direction: row;
  }
`;

export const CombatStatContainer = styled.div`
  ${mixinFlex("column")};
  width: 100%;
  flex-grow: 1;

  p {
    font-size: 0.4rem;
    text-transform: uppercase;
  }
  @media (width <= 500px) {
    width: 50%;
    height: fit-content;
    flex-grow: 1;
  }
`;

export const StyledInfoGroup = styled.div`
  width: 200%;
  display: flex;

  @media (width <= 500px) {
    /* flex-direction: row; */
  }
`;

export const StyledEntry = styled.div`
  ${mixinFlex("column")}
  width: 100%;
  height: 100%;
  gap: 0.4rem;
  padding: 2px;

  @media (width <= 500px) {
  }
`;

export const StyledTitle = styled.div`
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
