import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import logoWoD from "./assets/Logo - WoD.svg";
import Attributes from "./components/Attributes";

function App() {
  return (
    <>
      <img src={logoWoD} alt="" />
      <section>
        <Attributes />
      </section>
    </>
  );
}

export default App;
