import { useSelector } from "react-redux";
import store, { RootState } from ".";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export function useGames() {
  const games = useSelector((state: RootState) => state.game.games);
  return games;
}

export function useCurrentGame() {
  const currentGame = useSelector((state: RootState) => state.game.currentGame);
  return currentGame;
}

export function useCharacterSheetFields() {
  const currentCharacterSheet = useSelector(
    (state: RootState) => state.characters.characterSheetFields
  );
  return currentCharacterSheet;
}

export function useCharactersByGame(gameId?: string) {
  const characters = useSelector((state: RootState) =>
    !gameId
      ? undefined
      : state.characters.characters?.filter((c) => c.game.id === gameId)
  );
  return characters;
}

export function useCharacters() {
  const currentCharacter = useSelector(
    (state: RootState) => state.characters.characters
  );
  return currentCharacter;
}

export function useLoader() {
  const { gameSlug, characterId } = useParams();
  const games = useGames();
  const currentGame = useCurrentGame();
  const characters = useCharacters();
  const currentCharacter = useMemo(
    () => characters?.find((c) => c.id === characterId),
    [characterId, characters]
  );
  const characterSheetFields = useCharacterSheetFields();

  useEffect(() => {
    if (!games) store.dispatch.game.getGames();
  }, []);

  useEffect(() => {
    if (!gameSlug || !games?.length) return;
    store.dispatch.game.selectCurrentGame({ key: "slug", value: gameSlug });
  }, [games, gameSlug]);

  useEffect(() => {
    if (!currentGame) return;
    store.dispatch.characters.getCharacters(currentGame.id);
  }, [currentGame]);

  useEffect(() => {
    if (!currentCharacter) return;
    store.dispatch.characters.getGameFieldsByCharacterId(currentCharacter.id);
  }, [currentCharacter]);

  return {
    games: games ?? [],
    currentGame,
    characters,
    currentCharacter,
    characterSheetFields,
  };
}
