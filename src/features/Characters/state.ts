import { createModel } from "@rematch/core";

import { type RootModel } from "@/store/models";
import { type CharacterSheet, type Character, CharacterSheetField } from ".";
import apiStorage from "@/api";

type State = {
  characters: Character[] | undefined;
  characterSheetFields?: CharacterSheetField[] | null;
};

export const state = createModel<RootModel>()({
  state: {
    characters: undefined,
    characterSheetFields: null,
  } as State,
  reducers: {
    setCharacters: (state, characters: Character[]) => ({
      ...state,
      characters,
    }),
    setcharacterSheetFields: (
      state,
      characterSheetFields: CharacterSheetField[]
    ) => ({
      ...state,
      characterSheetFields,
    }),
  },
  effects: (dispatch) => ({
    getCharacters: async (gameId: string) => {
      const characters = await apiStorage.getCharactersByGameId(gameId);
      dispatch.characters.setCharacters(characters);
    },
    getGameFieldsByCharacterId: async (characterId: string) => {
      const characterSheetFields = await apiStorage.getGameFieldsByCharacterId(
        characterId
      );
      dispatch.characters.setcharacterSheetFields(characterSheetFields);
    },
  }),
});
