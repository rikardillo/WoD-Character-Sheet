import Ability from "./Ability";

export const AbilitiesSkills = ({ ability, ...props }) => {
  return (
    <>
      <div>Abilities and skills</div>
      <Ability ability={ability}  />
    </>
  );
};

export default AbilitiesSkills;
