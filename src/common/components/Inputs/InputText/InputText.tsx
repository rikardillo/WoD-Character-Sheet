import { useState, useEffect, useRef } from "react";

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
  edit?: boolean;
  error?: string;
};

export const InputText = ({
  defaultValue,
  onChange = () => {},
  containerProps = {},
  edit,
  error,
  ...props
}: InputTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean | undefined>();
  const [value, setValue] = useState(defaultValue || "");
  const [editingValue, setEditingValue] = useState<any>(false);
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
    if (!edit) {
      return setIsEditing(false);
    } else {
      onChange(value);
    }
  };

  const handleSave = (e) => {
    if (e.key == "Enter" || e.key == "Escape") {
      if (!edit) {
        return setIsEditing(false);
      } else {
        onChange(value);
      }
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
    } else if (edit) {
      setIsEditing(true);
    }
  }, [isEditing, value, editingValue, edit]);

  useEffect(() => {
    console.log("input", defaultValue);
  }, [defaultValue]);

  return (
    <StyledContainer
      {...containerProps}
      className={clsx("input-container", containerProps.className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isEditing ? (
        <StyledInput
          ref={inputRef}
          className={clsx(
            "input outline-none ring-0 focus:ring-0 outline-[1px] focus:outline-[1px] outline-white/10 focus:outline-white/20",
            !!error && "!outline-red-900 focus:!outline-red-800 focus:ring-0"
          )}
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
      <label className="text-xs">{error}</label>
    </StyledContainer>
  );
};

export default InputText;
