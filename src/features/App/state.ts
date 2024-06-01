import { createModel } from "@rematch/core";

import { type RootModel } from "@/store/models";
import { CustomError } from "@/common/errors";

type State = {
  loadingIds: string[];
  error?: CustomError | null;
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
    setError: (state, error: CustomError | string | null | undefined) => ({
      ...state,
      error:
        typeof error === "string"
          ? { title: "Unexpected error", detail: error }
          : error,
    }),
  },
  effects: {},
});
