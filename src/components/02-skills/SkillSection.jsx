
import DotRating from "../DotRating";
import data from "../../data/skills";

import styled from "styled-components";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

const SkillSectionContainer = styled.div`
  ${hoverHighlight}
  width: 24rem;
  height: 26rem;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
  flex-grow: 0;
`;

const SkillContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
`;

const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
`;

const StyledSkill = styled.div`
  min-width: 7rem;
  display: flex;
  flex-direction: column;
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
`;

export default function SkillSection() {
  return (
    <SkillSectionContainer>
      <h4>Skills</h4>
      <SkillContainer>
        <StyledSkills>
          {data.map((item, index) => (
            <StyledSkill key={index}>
              <span>{item.title}</span>
              <DotRating initialRating={item.rating} maxRating={5} />
            </StyledSkill>
          ))}
        </StyledSkills>
      </SkillContainer>
    </SkillSectionContainer>
  );
}
