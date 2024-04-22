import Ability from "./Ability";

export const AbilitiesSkills = ({ ability, profBonus, ...props }) => {
  return (
    <>
      <div>Abilities and skills</div>
      <Ability ability={ability} profBonus={profBonus} />
    </>
  );
};

export default AbilitiesSkills;
