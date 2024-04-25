import Ability from "./Ability";
import { style } from "../styles";

export const AbilitiesSkills = ({ ability, profBonus, ...props }) => {
  return (
    <div className={`abilities--skills flex flex-col w-[22rem] abilitiesContainer gap-3 ${style.infoBox}`}>
      <h2>Abilities and skills</h2>
      <Ability ability={ability} profBonus={profBonus} />
    </div>
  );
};

export default AbilitiesSkills;

