import styled from "styled-components";
import Skill from "./Skill";

const StyledSkill = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export default function SkillGroup({ data }) {
  return (
    <StyledSkill>
      {data.map((item, index) => (
        <Skill key={index} title={item.title} rating={item.rating} />
      ))}
    </StyledSkill>
  );
}
