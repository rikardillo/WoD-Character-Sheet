import DotRating from "../DotRating";

import styled from "styled-components";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";
import { useState } from "react";

const SkillSectionContainer = styled.div`
  ${hoverHighlight}
  width: 24rem;
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
  const [characterSkills, setCharacterSkills] = useState(loadInitialSkills);

  function loadInitialSkills() {
    const defaultSkills = [
      // Mental
      { title: "Academics", rating: 0 },
      { title: "Computer", rating: 0 },
      { title: "Crafts", rating: 0 },
      { title: "Investigation", rating: 0 },
      { title: "Medicine", rating: 0 },
      { title: "Occult", rating: 0 },
      { title: "Politics", rating: 0 },
      { title: "Science", rating: 0 },
      // Physical
      { title: "Athletics", rating: 0 },
      { title: "Brawl", rating: 0 },
      { title: "Drive", rating: 0 },
      { title: "Firearms", rating: 0 },
      { title: "Larceny", rating: 0 },
      { title: "Stealth", rating: 0 },
      { title: "Survival", rating: 0 },
      { title: "Weaponary", rating: 0 },
      // Social
      { title: "Animal Ken", rating: 0 },
      { title: "Empathy", rating: 0 },
      { title: "Expression", rating: 0 },
      { title: "Intimidation", rating: 0 },
      { title: "Persuasion", rating: 0 },
      { title: "Socialize", rating: 0 },
      { title: "Streetwise", rating: 0 },
      { title: "Subterfuge", rating: 0 },
    ];

    return defaultSkills.map((attr) => {
      const savedRating = localStorage.getItem(attr.title);
      return {
        title: attr.title,
        rating: savedRating !== null ? Number(savedRating) : attr.rating,
      };
    });
  }

  return (
    <SkillSectionContainer>
      <h4>Skills</h4>
      <SkillContainer>
        <StyledSkills>
          {characterSkills.map((item, index) => (
            <StyledSkill key={index}>
              <span>{item.title}</span>
              <DotRating
                initialRating={item.rating}
                maxRating={5}
                id={item.title}
              />
            </StyledSkill>
          ))}
        </StyledSkills>
      </SkillContainer>
    </SkillSectionContainer>
  );
}
