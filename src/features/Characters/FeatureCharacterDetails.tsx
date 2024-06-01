import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import store from "@/store";
import { useLoader } from "@/store/hooks";

import CharacterDetails from "./components/CharacterDetails";
import { type CharacterSheetFieldValue } from ".";

export const getValuesByFieldId = (fieldValues: CharacterSheetFieldValue[]) =>
  fieldValues.reduce((result, field) => {
    return {
      ...result,
      [field.gameFieldId]: {
        value: field.value,
        id: field.id,
        updatedAt: field.updatedAt,
      },
    };
  }, {});

export const FeatureCharacterDetails = () => {
  const { currentGame, characterSheetFieldValues, currentCharacter } =
    useLoader();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/${currentGame?.slug}`);
  };

  const handleUpdateFieldValue = (
    value: any,
    gameFieldId: string,
    fieldId?: string,
    isCreate?: boolean
  ) => {
    return store.dispatch.characters.createOrUpdateCharacterFieldValue({
      characterId: currentCharacter?.id!,
      value,
      gameFieldId,
      fieldId,
      isCreate,
    });
  };

  const handleRemoveField = async (gameFieldId: string) => {
    return store.dispatch.characters.removeCharacterField({
      characterId: currentCharacter?.id!,
      gameFieldId,
    });
  };

  const fieldValues = useMemo(() => {
    return getValuesByFieldId(characterSheetFieldValues || []);
  }, [characterSheetFieldValues]);

  return (
    <div className="mt-12 w-full m-auto flex flex-col items-center justify-center gap-10">
      <img
        src={currentGame?.logoImageUrl}
        width="256px"
        onClick={goBack}
        className="cursor-pointer"
      />
      <CharacterDetails
        fieldValues={fieldValues}
        onUpdateField={handleUpdateFieldValue}
        onRemoveField={handleRemoveField}
      />
    </div>
  );
};

export default FeatureCharacterDetails;
