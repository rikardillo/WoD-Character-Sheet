import styled from "styled-components";
import Input from "../inputs/Input";
import { mixinFlex, container } from "../../mixins/mixins";

// STYLES

const ContainerWeapons = styled.div`
  /* font-size: .6rem; */
  text-transform: uppercase;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  gap: .2rem;
`;

const InputWeapon = styled.div`
  ${mixinFlex};
  height: 2rem;
`;


// COMPONENT

export default function Weappons() {
  return (
    <>
      <h3>Weapons</h3>
      <ContainerWeapons>
        <div>Weapon/Attack</div>
        <div>Dice Mod.</div>
        <div>Range</div>
        <div>Clip</div>
        <div>Size</div>

        <InputWeapon>
          <Input />
        </InputWeapon>
        
      </ContainerWeapons>
    </>
  );
}
