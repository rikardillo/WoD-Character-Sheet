import styled from "styled-components";
import { mixinFlex,hoverHighlight } from "../../mixins/mixins";

const ContainerBox = styled.div`
  ${mixinFlex};
  ${hoverHighlight};
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
  width: 100%;
  gap: 0.5rem;
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50rem;
  height: 80%;
  gap: 0.5rem;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  border-radius: 10px;

  @media (width <500px) {
    width: 90vw;
  }
`;

