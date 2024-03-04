import styled from "styled-components";
import AttributeGroup from "./AttributeGroup";
import data from "../data/data.js";

const StyledAttributes = styled.section`
  display: flex;
  gap: 1rem;
  width: 80vw;
  justify-content: space-between;
  background-color: black;
  padding: 2rem;
  border-radius: 0.4rem;
`;

export default function Attributes() {
  return (
    <StyledAttributes>
      <AttributeGroup data={data} />
    </StyledAttributes>
  );
}
