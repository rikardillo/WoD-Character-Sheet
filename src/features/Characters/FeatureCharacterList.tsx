import { useNavigate } from "react-router-dom";

import CardListContainer from "@/common/components/CardSelector/CardListContainer";
import { useLoader } from "@/store/hooks";

import { type Character } from "@/features/Characters";
import Card from "@/common/components/CardSelector/Card";
import { Modal } from "flowbite-react";
import { InputText } from "@/common/components";
import { useState } from "react";
import store from "@/store";

export const FeatureCharacterList = () => {
  const { characters = [], currentGame } = useLoader();
  const navigate = useNavigate();
  const [createCharacterModal, setCreateCharacterModal] = useState(false);

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
    <>
      <button onClick={goToGameSelection}>Go to game selection</button>
      <Modal
        title="Create character"
        show={createCharacterModal}
        className="bg-black/70"
        size="sm"
        onClose={() => setCreateCharacterModal(false)}
      >
        <Modal.Header className="bg-black/90 text-white">
          Create Character
        </Modal.Header>
        <Modal.Body className="bg-black/90">
          <div className="mb-2 text-center">
            <label>Name</label>
          </div>
          <InputText
            title=""
            onChange={(v) => {
              console.log(v);
            }}
            edit
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="w-full"
            onClick={() => {
              setCreateCharacterModal(false);
              // TODO: create loading state
              store.dispatch.characters.createCharacter({
                gameId: currentGame?.id!,
                fieldValues: [],
              });
            }}
          >
            Create
          </button>
        </Modal.Footer>
      </Modal>
      <CardListContainer
        create
        onCreateCard={() => {
          setCreateCharacterModal(true);
        }}
      >
        {characters.map((character) => (
          <Card key={character.id} onClick={goToCharacterDetails(character)} />
        ))}
      </CardListContainer>
    </>
  );
};

export default FeatureCharacterList;
