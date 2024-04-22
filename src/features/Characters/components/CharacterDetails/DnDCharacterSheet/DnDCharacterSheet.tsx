import AbilitiesSkills from "./AbilitiesSkills/AbilitiesSkills";
import CharacterInfo from "./CharacterInfo/CharacterInfo";
import { Portrait } from "./Portrait/Portrait";
import { characterData as data } from "./data_dnd";



export const DnDCharacterSheet = () => {
  const profBonus = data.characterInfo.proficiencyBonus;
  console.log(profBonus);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Portrait />
        <CharacterInfo data={data.characterInfo} />
      </div>
      <AbilitiesSkills
        ability={data.abilities}
        profBonus={profBonus}
      />
    </div>
  );
};

export default DnDCharacterSheet;
