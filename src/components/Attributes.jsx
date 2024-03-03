import styled from "styled-components";
import AttributeGroup from "./AttributeGroup";

const StyledAttributes = styled.section`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  background-color: black;
  padding: 2rem;
  border-radius: 0.4rem;
`;

export default function Attributes() {
  return (
    <StyledAttributes>
      <AttributeGroup />
      <AttributeGroup />
      <AttributeGroup />
    </StyledAttributes>
  );
}
