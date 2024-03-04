import styled from "styled-components";
import Attribute from "./Attribute";

const StyledAttributes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export default function AttributesSection({ data }) {
  return (
    <StyledAttributes>
      {data.map((item, index) => (
        <Attribute key={index} title={item.title} rating={item.rating} />
      ))}
    </StyledAttributes>
  );
}
