// IMPORTS

import { useState, useEffect } from "react";
import styled from "styled-components";
import { mixinFlex } from "../../mixins/mixins";

// STYLES

const Box = styled.div`
  ${mixinFlex};
  position: relative;
  height: 1rem;
  width: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid red;

    div {
      background-color: red;
      transition: all 0.4s;
    }
  }
`;

export const NativeDiv = ({ show: _, filled: _2, ...props }) => (
  <div {...props} />
);

const Damage = styled(NativeDiv)`
  position: absolute;
  background-color: white;
  height: 2px;
  width: 80%;
  border-radius: 20px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.4s;
  z-index: ${(props) => (props.show ? 1 : -1)};
`;

const BashingDmg = styled(Damage)`
  transform: rotate(38deg);
`;

const LethalDmg = styled(Damage)`
  transform: rotate(-38deg);
`;

const AgravatedDmg = styled(Damage)`
  transform: rotate(90deg);
`;

// COMPONENT

export default function CheckBox({ id }) {
  const [clickCount, setClickCount] = useState(
    Number(localStorage.getItem(id)) || 0
  );

  useEffect(() => {
    localStorage.setItem(id, clickCount);
  }, [clickCount]);

  const handleClick = () => {
    if (clickCount === 3) {
      setClickCount(0);
    } else {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Box onClick={handleClick}>
      <BashingDmg show={clickCount >= 1} />
      <LethalDmg show={clickCount >= 2} />
      <AgravatedDmg show={clickCount >= 3} />
    </Box>
  );
}
