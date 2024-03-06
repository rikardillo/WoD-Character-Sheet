//IMPORTS

import React, { useState } from "react";
import styled from "styled-components";

// STYLES

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledTitle = styled.div`
  text-align: right;
  width: 20%;
  text-transform: uppercase;
  font-size: 0.4rem;
`;

const StyledInput = styled.input`
  font-family: 'Inknut-Antiqua';
  width: 80%%;
  height: 100%;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;
  padding: 0.1;
  margin: 0;
  text-align: center;
  box-sizing: border-box;
`;

const StyledEntry = styled.div`
  color: white;
  width: 80%;
  height: 100%;
  text-transform: capitalize;
  font-size: 1rem;
  border-radius: 4px;
  padding: 0.1rem;
  cursor: pointer;
  transition: all 0.4s;
  border: 0.5px solid rgba(255, 255, 255, 0.1);

  &:hover {
    border: 0.5px solid rgba(255, 255, 255, 0.4);
  }
`;

//COMPONENT

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
  
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {isEditing ? (
        <StyledInput
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

export default InfoEntry;
