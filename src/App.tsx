import "./App.css";
import logoWoD from "./assets/Logo - WoD.svg";
import CharacterSheet from "./features/Characters/CharacterSheet";
import { MainContainer } from "./components/Containers";

export const App = () => {
  return (
    <MainContainer>
      <img src={logoWoD} alt="Logo" />
      <CharacterSheet />
    </MainContainer>
  );
};

export default App;
