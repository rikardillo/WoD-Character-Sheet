import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import InfoSection from "./components/00-info/InfoSection";
import AttributesSection from "./components/01-attributes/AttributesSection";
import SkillSection from "./components/02-skills/SkillSection";
import HealthSection from "./components/03-healthWillpower/HealthSection";
import Combat from "./components/04-combat/Combat";
import Weapons from "./components/05-weaponsEquipment/Weapons";
import Equipment from "./components/05-weaponsEquipment/Equipment";
import WeaponEquipmentSection from "./components/05-weaponsEquipment/WeaponEquipmentSection";
import MeritsFlawsSection from "./components/07-meritsFlaws/MeritsFlawsSection";
import Morality from "./components/08-morality/Morality";
import { mixinFlex } from "./mixins/mixins";
// STYLES

const Content = styled.div`
  flex-wrap: wrap;
  width: 90vw;
  max-width: 50rem;
  height: 80%;
  gap: 0.5rem;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  border-radius: 10px;

  @media (width <500px) {
    width: 90vw;
  }
`;

const CombatContainer = styled.div`
  ${mixinFlex("column")};
  height: 26rem;
  gap: 0.4rem;
  flex-grow: 0;

  @media (width <= 500px) {
    width: 100%;
    height: fit-content;
  }
`;

// COMPONENT

function CharacterSheet() {
  const [characterAttributes, setCharacterAttributes] = useState(
    loadInitialAttributes
  );

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

  return (
    <Content className="content">
      <InfoSection />
      <AttributesSection att={characterAttributes} />
      <SkillSection />
      <CombatContainer>
        <HealthSection att={characterAttributes} />
        <Combat att={characterAttributes} />
      </CombatContainer>
      <Morality />
      <Equipment />
      <MeritsFlawsSection />
    </Content>
  );
}

export default CharacterSheet;
