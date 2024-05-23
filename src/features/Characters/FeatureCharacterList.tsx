import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";

import CardListContainer from "@/common/components/CardSelector/CardListContainer";
import { useLoader } from "@/store/hooks";
import store from "@/store";

import { type Character } from "@/features/Characters";
import Card from "@/common/components/CardSelector/Card";
import { InputText } from "@/common/components";

export const FeatureCharacterList = () => {
  const { characters = [], currentGame } = useLoader();
  const navigate = useNavigate();
  const [createCharacterModal, setCreateCharacterModal] = useState(false);
  const [newCharacterName, setNewCharacterName] = useState("");
  const [error, setError] = useState("");

  const goToGameSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const goToCharacterDetails =
    (character: Character) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!currentGame) return;
      navigate(`/${currentGame.slug}/${character.id}`);
    };

  const handleCreateCharacter = async (e: any) => {
    e.preventDefault();
    // TODO: set loading state
    try {
      await store.dispatch.characters.createCharacter({
        gameId: currentGame?.id!,
        characterName: newCharacterName,
      });
      setCreateCharacterModal(false);
      setNewCharacterName("");
    } catch (err: any) {
      setError(err.detail || "Error creating character");
    }
  };

  return (
    <>
      <div className="absolute top-[4rem] text-center">
        <button onClick={goToGameSelection} className="mb-[2rem]">
          Go to game selection
        </button>
        <h1 className="text-[2.2rem]">Your characters</h1>
      </div>
      <Modal
        title="Create character"
        show={createCharacterModal}
        className="bg-black/70"
        size="sm"
        onClose={() => setCreateCharacterModal(false)}
      >
        <form onSubmit={handleCreateCharacter}>
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
                setNewCharacterName(v);
              }}
              onInput={() => {
                setError("");
              }}
              edit
              autoFocus
              error={error}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="w-full" type="submit">
              Create
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <CardListContainer
        create
        createLabel="Create character"
        onCreateCard={() => {
          setCreateCharacterModal(true);
        }}
      >
        {characters.map((character) => (
          <Card key={character.id} onClick={goToCharacterDetails(character)}>
            {character.name}
          </Card>
        ))}
      </CardListContainer>
    </>
  );
};

export default FeatureCharacterList;
