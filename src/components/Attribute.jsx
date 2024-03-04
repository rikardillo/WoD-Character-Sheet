import styled from "styled-components";
import DotRating from "./DotRating";


const StyledAttribute = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  padding: 0.4rem;
  border-radius: 0.2rem;

  span {
    font-size: .6rem;
    text-transform: uppercase;
  }
`;

export default function Attribute({title, rating}) {
  return (
    <StyledAttribute>
      <span>{title}</span>
      <DotRating initialRating={rating} />
    </StyledAttribute>
  );
}
