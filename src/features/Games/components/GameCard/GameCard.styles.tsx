import styled from "styled-components";

export const StyledGameCard = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.8);

  &:hover {
    width: 220px;
    height: 330px;
    opacity: 1;
    -webkit-box-shadow: 0px 0px 40px 14px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 40px 14px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 40px 14px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.8);
  }

  img {
    padding: 2rem;
  }
`;
