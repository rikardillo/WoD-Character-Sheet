import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CardListContainer from "@/common/components/CardSelector/CardListContainer";
import Card from "@/common/components/CardSelector/Card";
import store from "@/store";
import { useLoader, useLoading } from "@/store/hooks";

import { type Game } from ".";

export const FeatureGameList = () => {
  const { games } = useLoader();
  const [isLoading] = useLoading("loadingGames");

  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<Game>();
  const [isGameSelected, setIsGameSelected] = useState(false);

  useEffect(() => {
    if (!selectedGame || !isGameSelected) return;
    navigate("/" + selectedGame.slug);
  }, [selectedGame, isGameSelected]);

  const handleSelectGame = (game: Game, gameSelected: boolean) => () => {
    setSelectedGame(game);
    setIsGameSelected(gameSelected);
    store.dispatch.game.selectCurrentGame({ key: "id", value: game.id });
  };

  return (
    <>
      <h1 style={{ position: "absolute", top: "8rem" }}>Choose your destiny</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <CardListContainer>
          {games.map((game) => (
            <Card
              key={game.id}
              onClick={handleSelectGame(game, true)}
              onMouseEnter={handleSelectGame(game, false)}
            >
              <img src={game.logoImageUrl} width="100%" />
            </Card>
          ))}
        </CardListContainer>
      )}
    </>
  );
};

export default FeatureGameList;
