import React, { useState } from "react";
import styled from "styled-components";

const ListItem = ({ title = "name", entry = "name" }) => {
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

const StyledSpan = styled.span`
  cursor: pointer;
  width: 4rem;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 4rem;
    font-size: 2rem;
  }
`;
const StyledTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.5rem;
`;
const StyledEntry = styled.div`
  text-transform: capitalize;
  font-size: 2rem;
`;

export default ListItem;
