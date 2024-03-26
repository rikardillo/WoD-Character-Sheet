import { RouterProvider, createBrowserRouter } from "react-router-dom";
import logoWoD from "./assets/Logo - WoD.svg";
import CharacterSheet from "./CharacterSheet";
import RegistrationForm from "./components/Auth/RegistrationForm";
import LoginForm from "./components/Auth/LoginForm";
import * as m from "./mixins/mixins";
import styled from "styled-components";
import { Content } from "./components/Utils/Container";

const MainContainer = styled.div`
  ${m.mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100%;
  background-color: #ffffff1d;
  gap: 2rem;

  @media (width <= 500px) {
    width: 100vw;
  }

  & .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const router = createBrowserRouter([
  {
    id: "character",
    path: "/",
    element: <CharacterSheet />,
  },
  {
    id: "register",
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    id: "login",
    path: "/login",
    element: <LoginForm />,
  },
]);

export const Routes = () => {
  return (
    <MainContainer id="main">
      <img
        src={logoWoD}
        alt="World of Darkness Logo"
        style={{ width: "20rem" }}
      />
      <Content className="content">
        <RouterProvider router={router} />
      </Content>
    </MainContainer>
  );
};
