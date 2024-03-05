import React, { useState } from "react";
import styled from "styled-components";

const InfoEntry = ({ title = "name", entry = "name" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedEntry(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  let input = "";

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {isEditing ? (
        <input
          type="text"
          value={editedEntry}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <StyledEntry onDoubleClick={handleDoubleClick}>
          {editedEntry}
        </StyledEntry>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 100%;
    color: black;
    font-size: 1rem;
    background-color: aliceblue;
    border: 0px;
    border-radius: 0.4rem;
    padding: 0.2rem;
    text-align: center;
    box-sizing: border-box;
  }
`;

const StyledTitle = styled.div`
  text-align: left;
  width: 4rem;
  text-transform: uppercase;
  font-size: 0.5rem;
`;

const StyledEntry = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  font-size: 1rem;
  /* background-color: darkgrey; */
  border: 0.5px solid lightgray;
  border-radius: 4px;
  cursor: pointer;
`;

export default InfoEntry;
