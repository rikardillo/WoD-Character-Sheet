import styled from "styled-components";
import { mixinFlex } from "../../mixins/mixins.js";
import Input from "../inputs/Input.jsx";
import Container from "../Utils/Container.jsx";
import { useState } from "react";

const StyledInfoGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;

  @media (width <= 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledEntry = styled.div`
  ${mixinFlex}
  height: 100%;
  gap: 0.4rem;
  padding: 2px;

  @media (width <= 500px) {
  }
`;
const StyledTitle = styled.div`
  ${mixinFlex("", "flex-end", "center")}
  width: 30%;
  height: 100%;
  font-size: 8px;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.4;

  @media (width <= 500px) {
    flex-direction: column;
  }
`;

export default function InfoSection() {
  const [characterInfo, setCharacterInfo] = useState([
    { title: "Name", entry: "" },
    { title: "Age", entry: "" },
    { title: "Player", entry: "" },
    { title: "Virtue", entry: "" },
    { title: "Vice", entry: "" },
    { title: "Concept", entry: "" },
    { title: "Chronicle", entry: "" },
    { title: "Faction", entry: "" },
    { title: "Group Name", entry: "" },
  ]);
  
  const currentCharInfo = [...characterInfo]
  console.log(currentCharInfo)

  return (

    <Container>
      <StyledInfoGroup>
        {characterInfo.map((item, index) => (
          <StyledEntry key={index}>
            <StyledTitle>{item.title}</StyledTitle>
            <Input
              entry={item.entry}
              id={item.title}
            />
          </StyledEntry>
        ))}
      </StyledInfoGroup>
    </Container>
  );
}
