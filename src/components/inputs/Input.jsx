//IMPORTS

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mixinFlex } from "../../mixins/mixins";

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
  display: inline-block;
  font-family: "Inknut-Antiqua";
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);

  &:focus,
  &:active {
    display: inline-block;
    font-family: "Inknut-Antiqua";
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: transparent;
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
  color: white;
  width: 100%;
  height: 100%;
  min-height: 2rem;
  text-transform: capitalize;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  border: 0.5px solid rgba(255, 255, 255, 0.1);

  &:hover {
    border: 0.5px solid rgba(255, 255, 255, 0.4);
  }
`;

//COMPONENT

const Input = ({ entry = "", id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

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

  return (
    <StyledContainer className="input-container">
      {isEditing ? (
        <StyledInput
          className="input"
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

export default Input;
