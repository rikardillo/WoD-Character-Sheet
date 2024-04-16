import { mixinFlex } from "@/common/utils/mixins";
import styled from "styled-components";

export const StyledInfoGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;

  @media (width <= 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledEntry = styled.div`
  ${mixinFlex()}
  height: 100%;
  gap: 0.4rem;
  padding: 2px;
`;

export const StyledTitle = styled.div`
  ${mixinFlex("", "flex-end", "center")}
  width: 30%;
  height: 100%;
  font-size: 8px;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.4;

  @media (width <= 500px) {
    flex-direction: column;
  }
`;
