import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Modal } from "flowbite-react";

import MainContainer from "@/common/components/Layout/MainContainer";
import Loading from "@/common/components/Loading";

import { useCurrentGame, useError, useIsLoading } from "@/store/hooks";

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
  const isLoading = useIsLoading();
  const [error, setError] = useError();

  return (
    <MainContainer id="main" $bg={bg}>
      <RouterProvider router={router} />
      {isLoading && <Loading />}
      {error && (
        <Modal show onClose={() => setError(null)}>
          <Modal.Header>{error.title}</Modal.Header>
          <Modal.Body>{error.detail}</Modal.Body>
        </Modal>
      )}
    </MainContainer>
  );
};

export default App;
