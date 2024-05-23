import styled from "styled-components";

export const MainContainer = styled.div<{ $bg?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100svw;
  height: 100svh;
  background-color: #ffffff1d;
  gap: 2rem;
  ${(props) =>
    !!props.$bg &&
    `
    background-image: url("${props.$bg}");
    background-size: 100svw 100svh;
    background-position: center center;
    transition: background-image 1s ease;
  `}

  @media (width <= 500px) {
    img {
      width: 80%;
    }
    width: 100vw;
  }

  & .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MainContainer;
