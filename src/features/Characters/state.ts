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
    addCharacter: (state, character: Character) => ({
      ...state,
      characters: [...(state.characters ?? []), character],
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
        characterFieldValues = characterFieldValues.concat([payload]);
      }

      newState.characterFieldValues = characterFieldValues;

      return newState;
    },
    removeField: (state, gameFieldId: string) => {
      const newState = { ...state };
      let characterFieldValues = newState.characterFieldValues ?? [];
      const fieldValueIndex = characterFieldValues.findIndex(
        (f) => f.gameFieldId === gameFieldId
      );

      if (fieldValueIndex > -1) {
        characterFieldValues.splice(fieldValueIndex, 1);
      }

      newState.characterFieldValues = [...characterFieldValues];

      return newState;
    },
  },
  effects: (dispatch) => ({
    getCharacters: async (gameId: string) => {
      const characters = await apiStorage.getCharactersByGameId(gameId);
      dispatch.characters.setCharacters(characters);
    },
    createCharacter: async ({
      gameId,
      fieldValues,
    }: {
      gameId: string;
      fieldValues: CharacterSheetFieldValue[];
    }) => {
      const character = await apiStorage.createCharacter(gameId, fieldValues);
      dispatch.characters.addCharacter(character);
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
      const result = await apiStorage.createOrUpdateCharacterFieldValue(
        characterId,
        value,
        gameFieldId,
        fieldId
      );
      dispatch.characters.setCharacterFieldValue(result);
    },
    removeCharacterField: async ({
      characterId,
      gameFieldId,
    }: {
      characterId: string;
      gameFieldId: string;
    }) => {
      await apiStorage.removeField(characterId, gameFieldId);
      dispatch.characters.removeField(gameFieldId);
    },
  }),
});
