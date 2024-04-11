import { useParams } from "react-router-dom";

export const FeatureCharacterSheet = () => {
  const { characterId } = useParams();
  return <>Character sheet ID: {characterId}</>;
};

export default FeatureCharacterSheet;
