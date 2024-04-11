import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "@/components/Layout/MainContainer";

export const getComponent = (c: () => Promise<any>) => async () => {
  const result = await c();
  return { Component: result.default };
};

const router = createBrowserRouter([
  {
    id: "test",
    path: "/test",
    lazy: getComponent(() => import("@/_old/CharacterSheet")),
  },
  {
    id: "characters",
    path: "/",
    lazy: getComponent(() => import("@/features/Characters/ListCharacters")),
  },
  {
    id: "character-sheet",
    path: "/characters/:characterId",
    lazy: getComponent(() => import("@/features/Characters/CharacterSheet")),
  },
  {
    id: "login",
    path: "/login",
    lazy: getComponent(() => import("@/features/Auth/SignIn")),
  },
  {
    id: "register",
    path: "/register",
    lazy: getComponent(() => import("@/features/Auth/SignUp")),
  },
]);

export const Routes = () => {
  return (
    <MainContainer id="main">
      <RouterProvider router={router} />
    </MainContainer>
  );
};
