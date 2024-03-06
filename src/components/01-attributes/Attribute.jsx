import styled from "styled-components";
import DotRating from "../DotRating";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

const StyledAttribute = styled.div`
  ${mixinFlex ('row', 'space-between', 'center')};
  ${hoverHighlight};
  gap: .2rem;
  padding: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;

  

  span {
    font-size: 0.5rem;
    text-transform: uppercase;
  }
`;

export default function Attribute({ title, rating }) {
  return (
    <StyledAttribute>
      <span>{title}</span>
      <DotRating initialRating={rating} maxRating={5} />
    </StyledAttribute>
  );
}
