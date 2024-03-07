import "./App.css";
import styled from "styled-components";
import logoWoD from "./assets/Logo - WoD.svg";
import InfoSection from "./components/00-info/InfoSection";
import AttributesSection from "./components/01-attributes/AttributesSection";
import * as m from "./mixins/mixins";
import SkillSection from "./components/02-skills/SkillSection";
import HealthSection from "./components/03-healthWillpower/HealthSection";
import Combat from "./components/04-combat/Combat";
import Weapons from "./components/05-weaponsEquipment/Weapons";
import Equipment from "./components/05-weaponsEquipment/Equipment";
import WeaponEquipmentSection from "./components/05-weaponsEquipment/WeaponEquipmentSection";
import MeritsFlawsSection from "./components/07-meritsFlaws/MeritsFlawsSection"
import Morality from "./components/08-morality/Morality";

// STYLES

const MainContainer = styled.div`
  ${m.mixinFlex("column")}
  max-width: 1200px;
  gap: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

// COMPONENT

function App() {
  return (
    <MainContainer>
      <img src={logoWoD} alt="" />
      <InfoSection />
      <Container>
        <AttributesSection />
        <HealthSection />
      </Container>
      <Container>
        <SkillSection />
        <Combat />
        <Morality />
      </Container>
      <Container>
        <WeaponEquipmentSection />
        <MeritsFlawsSection />
      </Container>
    </MainContainer>
  );
}

export default App;
