import * as m from "../../util/mixins";
import styled from "styled-components";

export const MainContainer = styled.div`
  ${m.mixinFlex("column")}
  max-width: 1200px;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

export const HighlightContainer = styled.div`
  ${m.hoverHighlight};
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;
