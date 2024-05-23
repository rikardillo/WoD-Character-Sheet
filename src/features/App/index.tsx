import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainContainer from "@/common/components/Layout/MainContainer";
import { useCurrentGame } from "@/store/hooks";

export const getComponent = (c: () => Promise<any>) => async () => {
  const result = await c();
  return { Component: result.default };
};

const router = createBrowserRouter([
  {
    id: "games",
    path: "/",
    lazy: getComponent(() => import("@/features/Games/FeatureGameList")),
  },
  {
    id: "character-list",
    path: "/:gameSlug",
    lazy: getComponent(
      () => import("@/features/Characters/FeatureCharacterList")
    ),
  },
  {
    id: "character-sheet",
    path: "/:gameSlug/:characterId",
    lazy: getComponent(
      () => import("@/features/Characters/FeatureCharacterDetails")
    ),
  },
  {
    id: "login",
    path: "/login",
    lazy: getComponent(() => import("@/features/Auth/FeatureSignIn")),
  },
  {
    id: "register",
    path: "/register",
    lazy: getComponent(() => import("@/features/Auth/FeatureSignUp")),
  },
]);

export const App = () => {
  const currentGame = useCurrentGame();
  const bg = currentGame?.backgroundImageUrl;

  return (
    <MainContainer id="main" $bg={bg}>
      <RouterProvider router={router} />
    </MainContainer>
  );
};

export default App;
