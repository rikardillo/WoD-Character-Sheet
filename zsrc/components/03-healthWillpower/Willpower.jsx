import styled from "styled-components";
import DotRating from "../DotRating";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

// STYLES

const Container = styled.div`
  ${mixinFlex ('column', 'center')};
  gap: 1rem;

`;


//COMPONENT

export default function () {
  return (
    <Container>
      <h4>Willpower</h4>
      <DotRating initialRating={0} maxRating={6} />
    </Container>
  );
};
