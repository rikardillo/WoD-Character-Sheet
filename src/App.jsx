import "./App.css";
import styled from "styled-components";
import logoWoD from "./assets/Logo - WoD.svg";
import InfoSection from "./components/00-info/InfoSection";
import AttributesSection from "./components/01-attributes/AttributesSection";
import * as m from "./mixins/mixins";
import SkillSection from "./components/02-skills/SkillSection";
import HealthSection from "./components/03-healthWillpower/HealthSection";

const MainContainer = styled.div`
  ${m.mixinFlex("column")}
  width: 100%;
  max-width: 900px;
  gap: 0.5rem;
`;

function App() {
  return (
    <MainContainer>
      <img src={logoWoD} alt="" />
      <InfoSection />
      <AttributesSection />
      <SkillSection />
      <HealthSection />
    </MainContainer>
  );
}

export default App;
