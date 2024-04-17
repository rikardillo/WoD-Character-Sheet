import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [fieldValues, setFieldValues] = useState({});

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
    setFieldValues((fieldValues) => ({ ...fieldValues, [gameFieldId]: value }));
    store.dispatch.characters.createOrUpdateCharacterFieldValue({
      characterId: currentCharacter?.id!,
      value,
      gameFieldId,
      fieldId,
    });
  };

  useEffect(() => {
    setFieldValues(getValuesByFieldId(characterSheetFieldValues || []));
  }, [characterSheetFieldValues]);

  return (
    <>
      <img src={currentGame?.logoImageUrl} width="256px" onClick={goBack} />
      <CharacterDetails
        characterSheetFields={characterSheetFields || []}
        fieldValues={fieldValues}
        onUpdateField={handleUpdateFieldValue}
      />
    </>
  );
};

export default FeatureCharacterDetails;
