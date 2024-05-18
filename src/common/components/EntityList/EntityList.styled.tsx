import styled from "styled-components";
import { container, mixinFlex } from "@/common/utils/mixins";

export const EntityContainer = styled.div`
  ${mixinFlex("column")}
  ${container};
  width: 100%;
  gap: 0.4rem;

  h4 {
    text-align: center;
    width: 100%;
  }

  @media (width <= 500px) {
    width: 100%;
  }
`;
