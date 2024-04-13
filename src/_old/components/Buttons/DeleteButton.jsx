import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  height: 100%;
  aspect-ratio: 1;
  /* padding: 6px 20px; */
  background-color: black;
  color: white;
  border: solid 1px white;
  border-radius: 4px;
  opacity: .4;
  transition: all .4s;

  &:hover {
    opacity: 1;
    border-radius: 50%;
    color: red;
    border: solid 1px red;
  }
`;

export default function Button({onClick, text}) {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};
