import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

export const store = init({
  models,
});

export default store;

Object.assign(window, { store });

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
