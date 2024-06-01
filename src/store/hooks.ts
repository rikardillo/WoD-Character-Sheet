import { useSelector } from "react-redux";
import store, { RootState } from ".";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { CustomError } from "@/common/errors";

export function useGames() {
  const games = useSelector((state: RootState) => state.game.games);
  return games;
}

export function useCurrentGame() {
  const currentGame = useSelector((state: RootState) => state.game.currentGame);
  return currentGame;
}

export function useCharacterFieldValues() {
  const currentCharacterSheet = useSelector(
    (state: RootState) => state.characters.characterFieldValues
  );
  return currentCharacterSheet;
}

export function useCharacterFieldValueByGameFieldId(gameFieldId: string) {
  const characterSheetFieldValue = useSelector((state: RootState) =>
    state.characters.characterFieldValues?.find(
      (f) => f.gameFieldId === gameFieldId
    )
  );
  return characterSheetFieldValue;
}

export function useCharactersByGame(gameId?: string) {
  const characters = useSelector((state: RootState) =>
    !gameId
      ? undefined
      : state.characters.characters?.filter((c) => c.gameId === gameId)
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
  const characterSheetFieldValues = useCharacterFieldValues();

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
    store.dispatch.characters.getGameFieldValuesByCharacterId(
      currentCharacter.id
    );
  }, [currentCharacter]);

  return {
    games: games ?? [],
    currentGame,
    characters,
    currentCharacter,
    characterSheetFieldValues,
  };
}

export const useLoading = (identifier: string) => {
  const loading = useSelector((state: RootState) =>
    state.app.loadingIds.includes(identifier)
  );
  const setLoading = (loading: boolean) => {
    if (loading) return store.dispatch.app.addLoading(identifier);
    store.dispatch.app.removeLoading(identifier);
  };
  return [loading, setLoading];
};

export const useIsLoading = () => {
  const loading = useSelector(
    (state: RootState) => state.app.loadingIds.length > 0
  );
  return loading;
};

export const useError = (): [
  CustomError | undefined | null,
  (error?: CustomError | null) => void
] => {
  const error = useSelector((state: RootState) => state.app.error);
  const setError = (error?: CustomError | null) => {
    return store.dispatch.app.setError(error);
  };
  return [error, setError];
};
