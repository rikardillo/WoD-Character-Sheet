import styled from "styled-components";
import { mixinFlex, container } from "../../mixins/mixins";
import WeaponsEntry from "./WeaponsEntry";

// STYLES

const ContainerWeapons = styled.div`
  width: 100%;
  gap: 0.6rem;
  
  h4 {
    text-align: center;
    width: 100%;
  }
  `;

const WeaponsTitles = styled.div`
  ${mixinFlex};
  text-transform: uppercase;
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;

  div {
    width: 100%;
  }
`;

// COMPONENT

export default function Weapons() {
  return (
    <>
      <ContainerWeapons>
        <h4>Weapons</h4>
        <WeaponsTitles>
          <div>
            <p>Weapon/Attack</p>
          </div>
          <div>Dice Mod.</div>
          <div>Range</div>
          <div>Clip</div>
          <div>Size</div>
        </WeaponsTitles>
        <WeaponsEntry />
        <WeaponsEntry />
        <WeaponsEntry />
      </ContainerWeapons>
    </>
  );
}
