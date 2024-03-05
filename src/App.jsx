import "./App.css";
import styled from "styled-components";
import logoWoD from "./assets/Logo - WoD.svg";
import InfoSection from "./components/InfoSection";
import AttributesSection from "./components/AttributesSection";
import * as m from "./mixins/mixins";

const MainContainer = styled.div`
  ${m.mixinFlex("column")}
  width: 100%;
  max-width: 900px;
  gap: 1rem;
`;

function App() {
  return (
    <MainContainer>
      <img src={logoWoD} alt="" />
      <InfoSection />
      <AttributesSection />
    </MainContainer>
  );
}

export default App;
