import { Input } from "@/features/Characters/components/CharacterDetails/DnDCharacterSheet/inputs/DndInput";

export const Attack = ({}) => {
  return (
    <div className="flex w-full">
      {/* <div>{name}</div>
      <div>{range}</div>
      <div>{bonus}</div>
      <div>{damage}</div>
      <div>{notes}</div> */}
      <Input entry="none" id={`uniqueId`}/>
    </div>
  );
};

export default Attack;
