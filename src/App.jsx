import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import logoWoD from "./assets/Logo - WoD.svg";
import InfoSection from "./components/InfoSection";
import AttributesSection from "./components/AttributesSection";

function App() {
  return (
    <main>
      <img src={logoWoD} alt="" />
      <InfoSection />
      <AttributesSection />
    </main>
  );
}

export default App;
