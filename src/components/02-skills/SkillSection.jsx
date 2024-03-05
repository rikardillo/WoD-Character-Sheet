import SkillGroup from "./SkillGroup";
import skills from "../../data/skills";
import styled from "styled-components";
import { mixinFlex } from "../../mixins/mixins";

const SkillSectionContainer = styled.div`
  ${mixinFlex("column")}
  width: 100%;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

const SkillContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  width: 100%;
  /* height: 120px; */
  gap: .5rem;
`;

const SkillTitleContainer = styled.div`
  ${mixinFlex("column", "space-around", "center")};
  height: 100%;

  p {
    ${mixinFlex("row", "center", "center")};
    width: 100%;
    font-size: 0.5rem;
    text-transform: uppercase;
  }
`;

export default function SkillSection() {
  return (
    <SkillSectionContainer>
      <h4>Skills</h4>
      <SkillContainer>
        <SkillGroup data={skills} />
      </SkillContainer>
    </SkillSectionContainer>
  );
}
