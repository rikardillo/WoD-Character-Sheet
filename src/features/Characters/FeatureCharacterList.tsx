import { useNavigate } from "react-router-dom";

import Content from "@/common/components/Layout/Content";
import { useLoader } from "@/store/hooks";

import CharacterCard from "@/features/Characters/components/CharacterCard";
import { type Character } from "@/features/Characters";

export const FeatureCharacterList = () => {
  const { characters = [] } = useLoader();
  const navigate = useNavigate();

  const goToGameSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const goToCharacterDetails =
    (character: Character) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      navigate(`/${character.game.slug}/${character.id}`);
    };

  return (
    <Content data-testid="character-list-content">
      <button onClick={goToGameSelection}>Go to game selection</button>
      <div>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={goToCharacterDetails(character)}
          />
        ))}
      </div>
    </Content>
  );
};

export default FeatureCharacterList;
