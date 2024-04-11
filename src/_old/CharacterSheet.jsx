import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import InfoSection from "./components/00-info/InfoSection";
import AttributesSection from "./components/01-attributes/AttributesSection";
import SkillSection from "./components/02-skills/SkillSection";
import HealthSection from "./components/03-healthWillpower/HealthSection";
import Combat from "./components/04-combat/Combat";
import Weapons from "./components/05-weaponsEquipment/Weapons";
import Equipment from "./components/05-weaponsEquipment/Equipment";
import Morality from "./components/08-morality/Morality";
import { mixinFlex } from "./mixins/mixins";
import Container from "./components/Utils/Container";
import Weapon from "./components/05-weaponsEquipment/Weapons";
import Merits from "./components/07-meritsFlaws/Merits";
import Flaws from "./components/07-meritsFlaws/Flaws";
// STYLES

const Content = styled.div`
  flex-wrap: wrap;
  width: 90vw;
  max-width: 50rem;
  height: 90vh;
  gap: 0.5rem;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  border-radius: 10px;

  @media (width <500px) {
    width: 90vw;
    height: 90vh;
  }
`;
const SectionContainer = styled.div`
  ${mixinFlex("row", "center", "center")}
  gap: .4rem;
  align-self: stretch;

  @media (width <= 500px) {
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }
`;

const CombatContainer = styled.div`
  ${mixinFlex("row")};
  width: 100%;
  gap: 0.4rem;

  @media (width <= 900px) {
    height: fit-content;
    flex-direction: column;
  }
`;

// COMPONENT

const y = 1;
const x = [];

x.pop(1);
x.push(4);
x.slice(10);

function CharacterSheet() {
  const [characterAttributes, setCharacterAttributes] = useState(
    loadInitialAttributes
  );
  const [characterSkills, setCharacterSkills] = useState(loadInitialSkills);

  function loadInitialAttributes() {
    const defaultAttributes = [
      { title: "Intelligence", rating: 1 },
      { title: "Wits", rating: 1 },
      { title: "Resolve", rating: 1 },
      { title: "Strength", rating: 1 },
      { title: "Dexterity", rating: 1 },
      { title: "Stamina", rating: 1 },
      { title: "Presence", rating: 1 },
      { title: "Manipulation", rating: 1 },
      { title: "Composure", rating: 1 },
    ];

    return defaultAttributes.map((attr) => {
      const savedRating = localStorage.getItem(attr.title);
      return {
        title: attr.title,
        rating: savedRating !== null ? Number(savedRating) : attr.rating,
      };
    });
  }

  const onChangeAttribute = (id, rating) => {
    localStorage.setItem(id, rating);
    const index = characterAttributes.findIndex(
      (attribute) => attribute.title === id
    );
    setCharacterAttributes((newCharacterAttributes) => {
      newCharacterAttributes[index].rating = rating;
      return [...newCharacterAttributes];
    });
  };

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

  const onChangeSkill = (id, rating) => {
    console.log(id);
    localStorage.setItem(id, rating);
    const index = characterSkills.findIndex((skill) => skill.title === id);
    setCharacterSkills((newCharacterSkills) => {
      newCharacterSkills[index].rating = rating;
      return [...newCharacterSkills];
    });
  };

  return (
    <Content className="content">
      <InfoSection />
      <AttributesSection
        att={characterAttributes}
        onChange={onChangeAttribute}
      />
      <SkillSection skills={characterSkills} onChange={onChangeSkill} />
      <CombatContainer>
        <HealthSection
          stamina={characterAttributes[5].rating}
          willpowerStat={
            characterAttributes[2].rating + characterAttributes[8].rating
          }
        />
        <Combat att={characterAttributes} />
        <Morality />
      </CombatContainer>
      <Equipment />
      <Weapon />
      <Merits />
      <Flaws />
    </Content>
  );
}

export default CharacterSheet;
