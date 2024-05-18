import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 6px 20px;
  background-color: black;
  color: white;
  border: solid 1px white;
  border-radius: 4px;
  opacity: .4;
  transition: all .4s;

  &:hover {
    opacity: 1;
  }
`;

export default function Button({onClick, text}) {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};
