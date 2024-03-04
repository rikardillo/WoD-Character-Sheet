import styled from "styled-components";
import Attribute from "./Attribute";


export default function AttributeGroup({ data }) {
  return (
    <StyledAttributeGroup>
      {data.map((item, index) => (
        <Attribute
          key={index}
          title={item.title}
          placeholder={item.placeholder}
          entry={item.entry}
        />
      ))}
    </StyledAttributeGroup>
  );
}

const StyledAttributeGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  flex-direction: column;
  gap: 0.4rem;
`;
