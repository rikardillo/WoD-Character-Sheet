import styled from "styled-components";

import { mixinFlex } from "@/common/utils/mixins";

export const Box = styled.div`
  ${mixinFlex()};
  position: relative;
  height: 1rem;
  width: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s;
  border-radius: 4px;
  cursor: pointer;

  @media (width <= 900px) {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover {
    border: 1px solid red;

    div {
      background-color: red;
      transition: all 0.4s;
    }
  }
`;

export const NativeDiv = ({ show: _, filled: _2, ...props }: any) => (
  <div {...props} />
);

export const Damage = styled(NativeDiv)`
  position: absolute;
  background-color: white;
  height: 2px;
  width: 80%;
  border-radius: 20px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.4s;
  z-index: ${(props) => (props.show ? 1 : -1)};
`;

export const BashingDmg = styled(Damage)`
  transform: rotate(38deg);
`;

export const LethalDmg = styled(Damage)`
  transform: rotate(-38deg);
`;

export const AgravatedDmg = styled(Damage)`
  transform: rotate(90deg);
`;
