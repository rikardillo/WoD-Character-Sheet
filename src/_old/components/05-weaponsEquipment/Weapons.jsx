import styled from "styled-components";
import { mixinFlex, container } from "../../mixins/mixins";
import { useState, useEffect } from "react";
import Input from "../inputs/Input";
import Button from "../Buttons/Button";

// STYLES

const ContainerWeapon = styled.div`
  ${mixinFlex('column')}
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

const WeaponTitles = styled.div`
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

const WeaponEntry = styled.div`
  ${mixinFlex};
  width: 100%;
  font-size: 0.4rem;
  height: 2rem;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

// COMPONENT

export default function Weapon() {
  const [weaponList, setWeaponList] = useState(() => {
    const savedList = localStorage.getItem("weaponList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("weaponList", JSON.stringify(weaponList));
  }, [weaponList]);

  function handleAddWeapon() {
    let currentItemIndex = weaponList.length + 1;
    const newWeapon = weaponList.concat({
      id: currentItemIndex,
      weapon: [
        { title: "Weapon/Attack", entry: "" },
        { title: "Dice Mod.", entry: "" },
        { title: "Range", entry: "" },
        { title: "Clip", entry: "" },
        { title: "Size", entry: "" },
      ],
    });

    setWeaponList(newWeapon);
  }

  return (
    <>
      <ContainerWeapon>
        <h4>Weapon</h4>
        <WeaponTitles>
          <div>Weapon</div>
          <div>Dice Mod.</div>
          <div>Range</div>
          <div>Clip</div>
          <div>Size</div>
        </WeaponTitles>
        {weaponList.map((weaponEntry, index) => (
          <WeaponEntry key={index}>
            {weaponEntry.weapon.map((item) => (
              <StyledEntry key={`${item.title}-${weaponEntry.id}`}>
                <Input
                  entry={item.entry}
                  id={`Weapon-${item.title}-${weaponEntry.id}`}
                />
              </StyledEntry>
            ))}
          </WeaponEntry>
        ))}
        <Button onClick={handleAddWeapon} text={`+ Add Weapon`} />
      </ContainerWeapon>
    </>
  );
}
