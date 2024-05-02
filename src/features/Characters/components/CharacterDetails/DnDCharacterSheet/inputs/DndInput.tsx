//IMPORTS

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mixinFlex } from "@/common/utils/mixins";
// STYLES

const StyledContainer = styled.div`
  min-height: 1.8rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  display: flex;
  font-family: "Inknut-Antiqua";
  width: 100%;
  height: 100%;
  min-height: 2rem;
  color: #000000;
  background-color: #7B7B7B;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);
  align-self: stretch;

  &:focus,
  &:active {
    display: flex;
    font-family: "Inknut-Antiqua";
    width: 100%;
    height: 100%;
    align-self: stretch;
    color: #734a4a;
    background-color: #7B7B7B;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    outline: 1 solid rgba(255, 255, 255, 0.4);
  }
`;

const StyledEntry = styled.div`
  ${mixinFlex()}
  font-family: "Inknut-Antiqua";
  font-size: 1rem;
  color: #965757;
  width: 100%;
  height: 100%;
  min-height: 2rem;
  text-transform: capitalize;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  border: 0.5px solid rgba(255, 255, 255, 0.4);

  &:hover {
    border: 0.5px solid rgba(255, 255, 255, 0.8);
  }
`;

const StyledPlaceholder = styled.div`
  ${mixinFlex};
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 1.9rem;
  font-size: .8rem;
  opacity: 0;
  transition: all 0.3s;
  align-self: stretch;
  flex-grow: 1;

  &:hover {
    opacity: .4;
  }
`;

//COMPONENT

export const Input = ({ entry = "", id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
    const savedEntry = localStorage.getItem(id);
    if (savedEntry) {
      setEditedEntry(savedEntry);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(id, editedEntry);
  }, [editedEntry, id]);

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
          {isHovering && editedEntry === "" ? <StyledPlaceholder>Double-click to Edit</StyledPlaceholder> : editedEntry}
        </StyledEntry>
      )}
    </StyledContainer>
  );
};

export default Input;
