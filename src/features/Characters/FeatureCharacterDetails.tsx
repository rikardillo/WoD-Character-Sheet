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
      [field.gameFieldId]: { value: field.value, id: field.id },
    };
  }, {});

export const FeatureCharacterDetails = () => {
  const {
    currentGame,
    characterSheetFields,
    characterSheetFieldValues,
    currentCharacter,
  } = useLoader();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/${currentGame?.slug}`);
  };

  const handleUpdateFieldValue = (
    value: any,
    gameFieldId: string,
    fieldId?: string
  ) => {
    store.dispatch.characters.createOrUpdateCharacterFieldValue({
      characterId: currentCharacter?.id!,
      value,
      gameFieldId,
      fieldId,
    });
  };

  const handleRemoveField = (gameFieldId: string) => {
    store.dispatch.characters.removeCharacterField({
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
        characterSheetFields={characterSheetFields || []}
        fieldValues={fieldValues}
        onUpdateField={handleUpdateFieldValue}
        onRemoveField={handleRemoveField}
      />
    </div>
  );
};

export default FeatureCharacterDetails;
