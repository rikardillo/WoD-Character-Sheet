import styled from "styled-components";
import Attribute from "./Attribute";

export default function AttributeGroup({title, placeholder}) {
  return (
    <StyledAttributeGroup>
      <Attribute title={title} placeholder={placeholder} />
      <Attribute title={title} placeholder={placeholder} />
      <Attribute title={title} placeholder={placeholder} />
    </StyledAttributeGroup>
  );
}

const StyledAttributeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;
