import { useState } from "react";
import { AgravatedDmg, BashingDmg, Box, LethalDmg } from "./CheckBox.styles";

export type CheckBoxProps = {
  id?: string;
  onChange: (id: string | undefined, value: number) => void;
  defaultValue?: number;
};

export const CheckBox = ({ id, onChange, defaultValue }: CheckBoxProps) => {
  const [clickCount, setClickCount] = useState(defaultValue || 0);

  const handleClick = () => {
    let newValue = clickCount === 3 ? 0 : clickCount + 1;
    setClickCount(newValue);
    onChange(id, newValue);
  };

  return (
    <Box onClick={handleClick}>
      <BashingDmg show={clickCount >= 1} />
      <LethalDmg show={clickCount >= 2} />
      <AgravatedDmg show={clickCount >= 3} />
    </Box>
  );
};

export default CheckBox;
