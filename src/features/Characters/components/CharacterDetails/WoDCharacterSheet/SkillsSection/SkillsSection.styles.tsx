import styled from "styled-components";

import { hoverHighlight, mixinFlex } from "@/common/utils/mixins";

export const SkillSectionContainer = styled.div`
  ${hoverHighlight}
  width: 100%;
  height: fit-content;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
  flex-grow: 0;

  @media (width <= 500px) {
    width: 100%;
  }
`;

export const SkillContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  width: 100%;
`;

export const StyledSkills = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;

  @media (width <= 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledSkill = styled.div`
  min-width: 7rem;
  display: flex;
  gap: 0.1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  span {
    font-size: 0.5rem;
    text-transform: uppercase;
  }

  @media (width <= 900px) {
    width: 100%;
  }
`;
