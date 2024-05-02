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

export const characterData = {
  characterInfo: {
    name: "Odra",
    race: "Half-elf",
    class: "Ranger",
    archetype: "Hunter",
    level: 5,
    proficiencyBonus: 2,
    passivePerception: 10,
    passiveInsight: 14,
    hitPointsMax: 47,
    hitPointsCurrent: 17,
  },

  abilities: [
    {
      title: "Strength",
      score: 18,
      mod() {
        return getModifier(this.score);
      },
      skills: [
        {
          title: "Saving Throws",
          proficiency: true,
        },
        {
          title: "Athletics",
          proficiency: true,
        },
      ],
    },
    {
      title: "Dexterity",
      score: 18,
      mod() {
        return getModifier(this.score);
      },
      skills: [
        {
          title: "Saving Throws",
          proficiency: true,
        },
        {
          title: "Acrobatics",
          proficiency: true,
        },
        {
          title: "Sleight of Hand",
          proficiency: false,
        },
        {
          title: "Stealth",
          proficiency: true,
        },
      ],
    },
    {
      title: "Constitution",
      score: 15,
      mod() {
        return getModifier(this.score);
      },
      skills: [
        {
          title: "Saving Throws",
          proficiency: false,
        },
      ],
    },
    {
      title: "Intelligence",
      score: 14,
      mod() {
        return getModifier(this.score);
      },
      savingThrow: 1,
      skills: [
        {
          title: "Saving Throws",
          proficiency: false,
        },
        {
          title: "Arcana",
          proficiency: false,
        },
        {
          title: "History",
          proficiency: false,
        },
        {
          title: "Investigation",
          proficiency: false,
        },
        {
          title: "Nature",
          proficiency: true,
        },
        {
          title: "Religion",
          proficiency: true,
        },
      ],
    },
    {
      title: "Wisdom",
      score: 16,
      mod() {
        return getModifier(this.score);
      },
      savingThrow: 1,
      skills: [
        {
          title: "Saving Throws",
          proficiency: false,
        },
        {
          title: "Animal Handling",
          proficiency: false,
        },
        {
          title: "Insight",
          proficiency: true,
        },
        {
          title: "Medicine",
          proficiency: false,
        },
        {
          title: "Perception",
          proficiency: true,
        },
        {
          title: "Survival",
          proficiency: true,
        },
      ],
    },
    {
      title: "Charisma",
      score: 16,
      mod() {
        return getModifier(this.score);
      },
      savingThrow: 1,
      skills: [
        {
          title: "Saving Throws",
          proficiency: false,
        },
        {
          title: "Deception",
          proficiency: true,
        },
        {
          title: "Intimidation",
          proficiency: false,
        },
        {
          title: "Performance",
          proficiency: false,
        },
        {
          title: "Persuasion",
          proficiency: false,
        },
      ],
    },
  ],

  actions: {
    attacks: [
      {
        title: String,
        range: Number,
        atkBonus: Number,
        Damage: String,
        Notes: String,
      },
    ],
  },
};
