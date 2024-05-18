import styled from "styled-components";

import { hoverHighlight, mixinFlex } from "@/common/utils/mixins";

export const HealthSectionContainer = styled.div`
  ${mixinFlex()}
  ${hoverHighlight}
  width: 100%;
  flex-direction: column;
  gap: 0.4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;

  @media (width <= 500px) {
    width: 100%;
  }
`;

export const HealthContainer = styled.div`
  ${mixinFlex("row", "flex-start")};
  width: fit-content;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

export const Container = styled.div`
  ${mixinFlex("column", "center")};
  gap: 0.6rem;
  flex-wrap: wrap;
`;
