import styled from "styled-components";
import { mixinFlex, container } from "@/common/utils/mixins";

export const ContainerWeapon = styled.div`
  ${mixinFlex("column")}
  ${container};
  width: 100%;
  gap: 0.6rem;

  h4 {
    text-align: center;
    width: 100%;
  }

  @media (width <= 500px) {
    width: 100%;
  }
`;

export const WeaponTitles = styled.div`
  ${mixinFlex()};
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;

  div {
    width: 100%;
  }

  span {
    min-width: 2rem;
    aspect-ratio: 1;
  }
`;

export const WeaponEntry = styled.div`
  ${mixinFlex()};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;
`;

export const StyledEntry = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledRemoval = styled.div`
  ${mixinFlex()}
  font-size: .6rem;
  gap: 0.6rem;
`;
