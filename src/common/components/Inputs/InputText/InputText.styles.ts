import styled from "styled-components";
import { mixinFlex } from "@/common/utils/mixins";

export const StyledContainer = styled.div`
  min-height: 1.8rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  display: flex;
  font-family: "Inknut-Antiqua";
  width: 100%;
  height: 100%;
  min-height: 2rem;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  align-self: stretch;

  &:focus,
  &:active {
    display: flex;
    font-family: "Inknut-Antiqua";
    width: 100%;
    height: 100%;
    align-self: stretch;
    color: #fff;
    background-color: transparent;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
  }
`;

export const StyledEntry = styled.div`
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
  border: 0.5px solid rgba(255, 255, 255, 0.4);

  &:hover {
    border: 0.5px solid rgba(255, 255, 255, 0.8);
  }
`;

export const StyledPlaceholder = styled.div`
  ${mixinFlex()};
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 1.9rem;
  font-size: 0.8rem;
  opacity: 0;
  transition: all 0.3s;
  align-self: stretch;
  flex-grow: 1;

  &:hover {
    opacity: 0.4;
  }
`;
