import React from "react";

import { Character } from "@/features/Characters";

export type CharacterCardProps = React.InsHTMLAttributes<HTMLDivElement> & {
  character: Character;
};
export const CharacterCard = ({ character, ...props }: CharacterCardProps) => {
  return (
    <div
      className="flex flex-col justify-center text-center gap-4 p-4 rounded-md bg-stone-800 hover:bg-stone-700 cursor-pointer "
      {...props}
    >
      <h1>{character.name}</h1>
      <div className="flex grow justify-around w-">
        <div>
          <span>Str</span> <span className="text-2xl">20</span>
        </div>
        <div>
          <span>Dex</span> <span className="text-2xl">20</span>
        </div>
        <div>
          <span>Con</span> <span className="text-2xl">20</span>
        </div>
        <div>
          <span>Int</span> <span className="text-2xl">20</span>
        </div>
        <div>
          <span>Wis</span> <span className="text-2xl">20</span>
        </div>
        <div>
          <span>Cha</span> <span className="text-2xl">20</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
