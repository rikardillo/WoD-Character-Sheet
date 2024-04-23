import { style } from "../styles";

const proficient = (
  <div className="w-4 h-4 border-2 border-black rounded-full hover:bg-slate-600 cursor-pointer"></div>
);

export const Ability = ({ ability, profBonus, ...props }) => {
  return (
    <div className={`abilitiesContainer flex flex-col gap-3 `}>
      {/* ABILITY LIST */}
      {ability.map((ability, i) => {
        return (
          <div
            className="flex grow w-full bg-stone-100 p-4 rounded-lg"
            key={`id-${ability.title}`}
          >
            <div>
              <div key={`id-${ability.title}`} className="xl">
                {ability.title}
              </div>
              <div className="flex gap-3 justify-center items-center">
                <div className="ab-score text-xl font-bold flex items-center justify-center w-10 h-10 border-2 border-black rounded-full">
                  {ability.score}
                </div>
                <div>+ {ability.mod()}</div>
                <div className="containerSkills flex flex-col gap-2">
                  {/* SKILL LIST */}
                  {ability.skills.map((skill, i) => {
                    return (
                      <div
                        className="flex gap-3 items-center w-full "
                        key={`id-${i}`}
                      >
                        {proficient}
                        <div className="hover:font-bold">
                          +{" "}
                          {skill.proficiency
                            ? ability.mod() + profBonus
                            : ability.mod()}
                        </div>
                        <div>{skill.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ability;
