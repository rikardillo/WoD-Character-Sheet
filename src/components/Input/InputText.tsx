// import React from "react";

// export const InputText = (props: React.JSX.IntrinsicElements["input"]) => {
//   return <input {...props} />;
// };

// export default InputText;

//IMPORTS

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { mixinFlex } from "@/util/mixins";

// STYLES

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  height: 2rem;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  min-width: 200px;

  &:focus,
  &:active {
    outline: 1px solid rgba(255, 255, 255, 0.4);
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  min-width: 200px;
`;

const StyledReadOnly = styled.div`
  font-family: inherit;
  width: 100%;
  height: 2rem;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 4px;
`;

const StyledEntry = styled.div`
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  height: 2rem;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
  min-width: 200px;
`;

//COMPONENT

export type InputProps = React.JSX.IntrinsicElements["input"] & {};

const Input = ({ placeholder, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <StyledInputContainer>
      {placeholder && <div className="placeholder">{placeholder}:</div>}
      <StyledEntry
        onMouseDown={(e) => {
          if (!isEditing) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        onDoubleClick={() => {
          setIsEditing(true);
          inputRef?.current!.focus();
        }}
      >
        <StyledInput
          {...props}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false);
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          style={{ opacity: isEditing ? 1 : 0 }}
          ref={inputRef}
        />
        {!isEditing && (
          <StyledReadOnly>{props.value || props.defaultValue}</StyledReadOnly>
        )}
      </StyledEntry>
    </StyledInputContainer>
  );
};

export default Input;
