import { container, mixinFlex } from "@/common/utils/mixins";
import styled from "styled-components";

export const SectionContainer = styled.div`
  ${mixinFlex("column", "", "center")};
  ${container};
  width: 100%;
  min-width: 15rem;
  gap: 1rem;
  align-self: stretch;
  flex-grow: 1;
`;

export const Container = styled.div`
  ${mixinFlex()};
  align-self: stretch;
  width: 100%;
  height: 100%;
  gap: 0.2rem;
  flex-grow: 1;
`;

export const StyledEntry = styled.div`
  ${mixinFlex("column")};
  gap: 0.4rem;
  width: 100%;
  height: 100%;
  align-self: stretch;
  flex-grow: 1;
`;
