import styled from "styled-components";
import { hoverHighlight, mixinFlex } from "@/common/utils/mixins";

export const AttSection = styled.div`
  ${mixinFlex("column")}
  ${hoverHighlight}
  width: 100%;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

export const AttContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  width: 100%;
  gap: 0.5rem;
`;

export const AttTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  gap: 1.4rem;
  height: 100%;

  p {
    ${mixinFlex("row", "flex-end", "center")};
    width: 100%;
    font-size: 0.4rem;
    text-transform: uppercase;
    text-align: right;
  }

  @media (width <= 900px) {
    display: none;
  }
`;

export const StyledAttributes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  @media (width <= 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledAttribute = styled.div`
  ${mixinFlex("row", "space-between", "center")};
  ${hoverHighlight};
  width: 100%;
  gap: 0.2rem;
  padding: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;

  span {
    font-size: 0.5rem;
    text-transform: uppercase;
  }

  @media (width <= 900px) {
    flex-direction: row;
  }
`;
