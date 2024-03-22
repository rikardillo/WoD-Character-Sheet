import styled from "styled-components";
import data from "../../data/data.js";
import { hoverHighlight, mixinFlex } from "../../mixins/mixins.js";
import Input from "../inputs/Input.jsx";
import Container from "../Utils/Container.jsx";


const StyledInfoGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
`;

const StyledEntry = styled.div`
  ${mixinFlex}
  display: flex;
  height: 100%;
  gap: 14px;
  padding: 2px;
`;
const StyledTitle = styled.div`
  ${mixinFlex('', 'flex-end','center')}
  width: 30%;
  height: 100%;
  font-size: 8px;
  text-align: right;
  text-transform: uppercase;
  line-height: 1.4;
`;

export default function InfoSection() {
  return (
    <Container>
      <StyledInfoGroup>
        {data.map((item, index) => (
          <StyledEntry key={index}>
            <StyledTitle>{item.title}</StyledTitle>
            <Input
              title={item.title}
              placeholder={item.placeholder}
              entry={item.entry}
            />
          </StyledEntry>
        ))}
      </StyledInfoGroup>
    </Container>
  );
}
