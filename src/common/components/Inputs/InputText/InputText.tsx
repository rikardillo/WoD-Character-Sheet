import React, { useState, useEffect, useRef } from "react";

import {
  StyledContainer,
  StyledInput,
  StyledEntry,
  StyledPlaceholder,
} from "./InputText.styles";
import clsx from "clsx";

export type InputTextProps = JSX.IntrinsicElements["input"] & {
  defaultValue?: any;
  onChange: (value: string) => void;
  containerProps?: JSX.IntrinsicElements["div"];
};

export const InputText = ({
  defaultValue,
  onChange = () => {},
  containerProps = {},
  ...props
}: InputTextProps) => {
  const [isEditing, setIsEditing] = useState<boolean | undefined>();
  const [value, setValue] = useState(defaultValue || "");
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
      {...containerProps}
      className={clsx("input-container", containerProps.className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isEditing ? (
        <StyledInput
          className="input"
          type="text"
          defaultValue={value || defaultValue}
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
            value || defaultValue
          )}
        </StyledEntry>
      )}
    </StyledContainer>
  );
};

export default InputText;
