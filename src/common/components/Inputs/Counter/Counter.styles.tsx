import styled from "styled-components";

import ArrowUpSVG from "@/assets/icons/arrow-up.svg";

export const StyledCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  label {
    font-size: 0.5rem;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  .control-value {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    width: 3.5rem;
    padding: 0.5rem;
    gap: 0.5rem;

    div {
      padding: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &:hover {
    p {
      outline: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
`;

export const StyledArrowUp = styled.div`
  width: 12px;
  height: 12px;
  -webkit-mask-image: url("${ArrowUpSVG}");
  mask-image: url("${ArrowUpSVG}");
  mask-size: cover;
  background-color: white;
  cursor: pointer;
`;

export const StyledArrowDown = styled(StyledArrowUp)`
  transform: rotate(180deg);
`;
