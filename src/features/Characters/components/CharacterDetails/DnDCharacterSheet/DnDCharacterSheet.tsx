import AbilitiesSkills from "./AbilitiesSkills/AbilitiesSkills";
import CharacterInfo from "./CharacterInfo/CharacterInfo";
import { Portrait } from "./Portrait/Portrait";

function getModifier(score) {
  if (score > 9 && score < 12) {
    return 0;
  } else if (score > 11 && score < 14) {
    return 1;
  } else if (score > 13 && score < 16) {
    return 2;
  } else if (score > 15 && score < 18) {
    return 3;
  } else if (score > 17 && score < 20) {
    return 4;
  } else if (score > 21 && score < 22) {
    return 5;
  }
}

function skillValue(prof, mod) {
  if (prof) {
    console.log(`is proficient`)
    return prof ? mod + 3 : mod;
  }
}

const characterData = {
  characterInfo: {
    name: "Jigak",
    race: "Half-elf",
    class: "Ranger",
    archetype: "Hunter",
    level: "5",
    proficiencyBonus: "4",
    passivePerception: "12",
    passiveInsight: "14",
    hitPointsMax: "47",
    hitPointsCurrent: "17",
  },

  abilities: [
    {
      title: "Strength",
      score: 18,
      mod() {
        return getModifier(this.score);
      },
      savingThrow: 1,
      skills: [
        {
          title: "Athletics",
          proficiency: true,
          val: function () {
            const modifier = this.mod();
            return skillValue(this.proficiency, modifier);
          },
        },
      ],
    },
  ],
};



export const DnDCharacterSheet = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Portrait />
        <CharacterInfo data={characterData.characterInfo} />
      </div>
      <AbilitiesSkills ability={characterData.abilities} />
    </div>
  );
};

export default DnDCharacterSheet;
