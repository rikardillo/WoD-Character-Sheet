import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff1d;
  gap: 2rem;

  @media (width <= 500px) {
    width: 100vw;
  }

  & .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MainContainer;
