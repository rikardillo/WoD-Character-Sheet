import { createModel } from "@rematch/core";

import { type RootModel } from "@/store/models";
import { type Character, type CharacterSheetFieldValue } from ".";
import apiStorage from "@/api";

type State = {
  characters: Character[] | undefined;
  characterFieldValues?: CharacterSheetFieldValue[] | null;
};

export const state = createModel<RootModel>()({
  state: {
    characters: undefined,
    characterFieldValues: null,
  } as State,
  reducers: {
    setCharacters: (state, characters: Character[]) => ({
      ...state,
      characters,
    }),
    setcharacterFieldValues: (
      state,
      characterFieldValues: CharacterSheetFieldValue[]
    ) => ({
      ...state,
      characterFieldValues,
    }),
    setCharacterFieldValue: (state, payload) => {
      const newState = { ...state };
      let characterFieldValues = state.characterFieldValues ?? [];
      const fieldValueIndex = characterFieldValues.findIndex(
        (f) => f.gameFieldId === payload.gameFieldId
      );

      if (fieldValueIndex > -1) {
        characterFieldValues[fieldValueIndex] = {
          ...characterFieldValues[fieldValueIndex],
          ...payload,
        };
      } else {
        characterFieldValues = [payload];
      }

      newState.characterFieldValues = characterFieldValues;

      return newState;
    },
  },
  effects: (dispatch) => ({
    getCharacters: async (gameId: string) => {
      const characters = await apiStorage.getCharactersByGameId(gameId);
      dispatch.characters.setCharacters(characters);
    },
    getGameFieldValuesByCharacterId: async (characterId: string) => {
      const characterFieldValues =
        await apiStorage.getGameFieldValuesByCharacterId(characterId);
      dispatch.characters.setcharacterFieldValues(characterFieldValues);
    },
    createOrUpdateCharacterFieldValue: async ({
      characterId,
      value,
      gameFieldId,
      fieldId,
    }: {
      characterId: string;
      value: any;
      gameFieldId: string;
      fieldId?: string;
    }) => {
      dispatch.characters.setCharacterFieldValue({
        characterId,
        gameFieldId,
        fieldId,
        value,
      });
      const result = await apiStorage.createOrUpdateCharacterFieldValue(
        characterId,
        value,
        gameFieldId,
        fieldId
      );
      dispatch.characters.setCharacterFieldValue(result);
    },
  }),
});
