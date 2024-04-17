import React, { useState, useEffect, useRef } from "react";

import {
  StyledContainer,
  StyledInput,
  StyledEntry,
  StyledPlaceholder,
} from "./InputText.styles";

export type InputTextProps = JSX.IntrinsicElements["input"] & {
  initialValue: any;
  onChange: (value: string) => void;
};

export const InputText = ({
  initialValue,
  onChange = () => {},
  ...props
}: InputTextProps) => {
  const [isEditing, setIsEditing] = useState<boolean | undefined>();
  const [value, setValue] = useState(initialValue);
  const [editingValue, setEditingValue] = useState<any>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditingValue(value);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
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

  useEffect(() => {
    if (
      typeof isEditing !== "undefined" &&
      !isEditing &&
      editingValue !== value
    ) {
      onChange(value);
    }
  }, [isEditing, value, editingValue]);

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
          defaultValue={value || initialValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleSave}
          autoFocus
          {...props}
        />
      ) : (
        <StyledEntry onDoubleClick={handleDoubleClick}>
          {isHovering && value === "" ? (
            <StyledPlaceholder>Double-click to Edit</StyledPlaceholder>
          ) : (
            value || initialValue
          )}
        </StyledEntry>
      )}
    </StyledContainer>
  );
};

export default InputText;
