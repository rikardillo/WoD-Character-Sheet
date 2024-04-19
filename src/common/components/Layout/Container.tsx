import { hoverHighlight, mixinFlex } from "@/common/utils/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${mixinFlex()};
  ${hoverHighlight};
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
  width: 100%;
  gap: 0.5rem;
`;

export default Container;

export const CombatContainer = styled.div`
  ${mixinFlex("row")};
  width: 100%;
  gap: 0.4rem;

  @media (width <= 900px) {
    height: fit-content;
    flex-direction: column;
  }
`;
