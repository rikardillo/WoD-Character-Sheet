import styled from "styled-components";

const Content = styled.div`
  flex-wrap: wrap;
  width: 90vw;
  max-width: 80rem;
  height: 90vh;
  gap: 0.5rem;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  border-radius: 10px;

  @media (width <500px) {
    width: 90vw;
    height: 90vh;
  }
`;

export default Content;
