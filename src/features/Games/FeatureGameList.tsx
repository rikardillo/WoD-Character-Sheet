import { useEffect, useState } from "react";

import store from "@/store";
import { GameCard, GameListContainer } from "./components";
import { useNavigate } from "react-router-dom";

import { type Game } from ".";
import { useLoader } from "@/store/hooks";

export const FeatureGameList = () => {
  const { games } = useLoader();

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
      <GameListContainer>
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={handleSelectGame(game, true)}
            onMouseEnter={handleSelectGame(game, false)}
          />
        ))}
      </GameListContainer>
    </>
  );
};

export default FeatureGameList;
