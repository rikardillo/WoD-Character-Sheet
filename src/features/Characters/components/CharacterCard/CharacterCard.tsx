import React from "react";

import { Character } from "@/features/Characters";

export type CharacterCardProps = React.InsHTMLAttributes<HTMLDivElement> & {
  character: Character;
};
export const CharacterCard = ({ character, ...props }: CharacterCardProps) => {
  return (
    <div {...props}>
      <h1>{character.name}</h1>
    </div>
  );
};

export default CharacterCard;
