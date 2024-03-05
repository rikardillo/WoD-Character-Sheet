import styled from "styled-components";
import DotRating from "../DotRating";

const StyledAttribute = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  span {
    font-size: 0.6rem;
    text-transform: uppercase;
  }
`;

export default function Attribute({ title, rating }) {
  return (
    <StyledAttribute>
      <span>{title}</span>
      <DotRating initialRating={rating} />
    </StyledAttribute>
  );
}
