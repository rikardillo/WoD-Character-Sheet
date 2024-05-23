import { createModel } from "@rematch/core";

import { type RootModel } from "@/store/models";
import { type Game } from ".";

import appLogger from "@/common/utils/logger";
import apiStorage from "@/api";

type State = {
  games: Game[] | undefined;
  currentGame?: Game | null;
};

export const state = createModel<RootModel>()({
  state: {
    games: undefined,
    currentGame: null,
  } as State,
  reducers: {
    setGames: (state, games) => ({ ...state, games }),
    selectCurrentGame: (
      state,
      payload: { key: "id" | "slug"; value: string }
    ) => ({
      ...state,
      currentGame: (state.games || []).find(
        (game) => game[payload.key] === payload.value
      ),
    }),
  },
  effects: (dispatch) => ({
    getGames: async () => {
      dispatch.app.addLoading("loadingGames");
      const games = await apiStorage.getGames();
      dispatch.game.setGames(games);
      dispatch.app.removeLoading("loadingGames");
      return games;
    },
  }),
});
