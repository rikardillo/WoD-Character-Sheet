import { createModel } from "@rematch/core";

import { type RootModel } from "@/store/models";

type State = {
  loadingIds: string[];
};

export const state = createModel<RootModel>()({
  state: {
    loadingIds: [],
  } as State,
  reducers: {
    addLoading: (state, identifier: string) => {
      if (state.loadingIds.includes(identifier)) {
        return state;
      }
      return {
        ...state,
        loadingIds: [...state.loadingIds, identifier],
      };
    },
    removeLoading: (state, identifier: string) => {
      return {
        ...state,
        loadingIds: state.loadingIds.filter((id) => id !== identifier),
      };
    },
  },
  effects: {},
});
