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
import MeritsFlawsSection from "./components/07-meritsFlaws/MeritsFlawsSection";
import Morality from "./components/08-morality/Morality";

// STYLES

const MainContainer = styled.div`
  ${m.mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100%;
  background-color: #ffffff1d;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  gap: 0.5rem;
`;

// COMPONENT

function App() {
  return (
    <MainContainer id="main">
      <img
        src={logoWoD}
        alt="World of Darkness Logo"
        style={{ width: "20rem" }}
      />
      <Content>
        <InfoSection />
        <AttributesSection />
        
      </Content>
    </MainContainer>
  );
}

export default App;
