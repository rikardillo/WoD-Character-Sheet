import AbilitiesSkills from "./AbilitiesSkills/AbilitiesSkills";
import ActionsSection from "./Actions/ActionsSection";
import CharacterInfo from "./CharacterInfo/CharacterInfo";
import { Portrait } from "./Portrait/Portrait";
import { characterData as data } from "./data_dnd";

export const DnDCharacterSheet = () => {
  const profBonus = data.characterInfo.proficiencyBonus;
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-3">
        <Portrait />
        <CharacterInfo data={data.characterInfo} />
      </div>
      <div className={`flex gap-3 w-full`}>
        <AbilitiesSkills ability={data.abilities} profBonus={profBonus} />
        <ActionsSection />
      </div>
    </div>
  );
};

export default DnDCharacterSheet;
