import { useState } from "react";
import styled from "styled-components";
import { mixinFlex } from "../../mixins/mixins";

const Box = styled.div`
  ${mixinFlex};
  position: relative;
  height: 1rem;
  width: 1rem;
  border: 2px solid white;
  transition: all 0.4s;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 2px solid red;

    div {
      background-color: red;
      transition: all 0.4s;
    }
  }
`;

const Damage = styled.div`
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

export default function CheckBox() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 3) {
      setClickCount(0); // Reset the click count after showing Agravated Damage
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
