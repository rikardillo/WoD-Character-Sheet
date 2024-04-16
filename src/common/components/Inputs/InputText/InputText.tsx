import { useState, useEffect } from "react";

import {
  StyledContainer,
  StyledInput,
  StyledEntry,
  StyledPlaceholder,
} from "./InputText.styles";

export const InputText = ({ entry = "" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);
  const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   const savedEntry = localStorage.getItem(id);
  //   if (savedEntry) {
  //     setEditedEntry(savedEntry);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   localStorage.setItem(id, editedEntry);
  // }, [editedEntry, id]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedEntry(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleSave = (e) => {
    if (e.key == "Enter" || e.key == "Escape") {
      setIsEditing(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <StyledContainer
      className="input-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isEditing ? (
        <StyledInput
          className="input"
          type="text"
          value={editedEntry}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleSave}
          autoFocus
        />
      ) : (
        <StyledEntry onDoubleClick={handleDoubleClick}>
          {isHovering && editedEntry === "" ? (
            <StyledPlaceholder>Double-click to Edit</StyledPlaceholder>
          ) : (
            editedEntry
          )}
        </StyledEntry>
      )}
    </StyledContainer>
  );
};

export default InputText;
