import { useMemo } from "react";
import { CharacterDetailsProps } from "..";
import InfoSection from "../InfoSection/InfoSection";

export const WoDCharacterSheet = ({
  characterSheetFields,
}: CharacterDetailsProps) => {
  const infoFields = useMemo(
    () =>
      characterSheetFields.filter((field) => field?.group?.id === "wod-info"),
    [characterSheetFields]
  );
  return (
    <>
      <InfoSection fields={infoFields} />
    </>
  );
};

export default WoDCharacterSheet;
