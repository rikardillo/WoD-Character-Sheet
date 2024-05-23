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
      dispatch.app.addLoading("characterList");
      const characters = await apiStorage.getCharactersByGameId(gameId);
      dispatch.characters.setCharacters(characters);
      dispatch.app.removeLoading("characterList");
    },
    createCharacter: async ({
      gameId,
      characterName,
    }: {
      gameId: string;
      characterName: string;
    }) => {
      dispatch.app.addLoading("createCharacter");
      const character = await apiStorage.createCharacter(gameId, characterName);
      dispatch.characters.addCharacter(character);
      dispatch.app.removeLoading("createCharacter");
    },
    getGameFieldValuesByCharacterId: async (characterId: string) => {
      dispatch.app.addLoading("getCharacterFieldValues");
      const characterFieldValues =
        await apiStorage.getGameFieldValuesByCharacterId(characterId);
      dispatch.characters.setcharacterFieldValues(characterFieldValues);
      dispatch.app.removeLoading("getCharacterFieldValues");
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
      dispatch.app.addLoading(`updateCharacterField-${gameFieldId}`);
      const result = await apiStorage.createOrUpdateCharacterFieldValue(
        characterId,
        value,
        gameFieldId,
        fieldId
      );
      dispatch.characters.setCharacterFieldValue(result);
      dispatch.app.removeLoading(`updateCharacterField-${gameFieldId}`);
    },
    removeCharacterField: async ({
      characterId,
      gameFieldId,
    }: {
      characterId: string;
      gameFieldId: string;
    }) => {
      dispatch.app.addLoading(`removeCharacterField-${gameFieldId}`);
      await apiStorage.removeField(characterId, gameFieldId);
      dispatch.characters.removeField(gameFieldId);
      dispatch.app.removeLoading(`removeCharacterField-${gameFieldId}`);
    },
  }),
});
