import { useEffect, useState } from "react";
import { AgravatedDmg, BashingDmg, Box, LethalDmg } from "./CheckBox.styles";

export type CheckBoxProps = {
  id?: string;
  onChange: (value: number, id: string | undefined) => void;
  value?: number;
};

export const CheckBox = ({ id, onChange, value }: CheckBoxProps) => {
  const [clickCount, setClickCount] = useState(value || 0);

  useEffect(() => {
    setClickCount(value || 0);
  }, [value]);

  const handleClick = () => {
    let newValue = clickCount === 3 ? 0 : clickCount + 1;
    setClickCount(newValue);
    onChange(newValue, id);
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
