import Input from "../inputs/Input";
import DotRating from "../DotRating";
import styled from "styled-components";

import { mixinFlex, container } from "../../mixins/mixins";

const SectionContainer = styled.div`
  ${mixinFlex("column", "flex-start", "center")};
  ${container};
  height: 100%;
  width: 20%;
  min-width: 15rem;
  gap: 1rem;
  flex-grow: 1;
  /* align-self: stretch; */
  @media (width <= 500px) {
    width: 100%;
    height: fit-content;
  }
`;

const Container = styled.div`
  ${mixinFlex}
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  ${mixinFlex("row")};
  gap: 0.4rem;
  width: 100%;

  span {
    width: 2rem;
  }
`;

export default function Morality() {
  return (
    <SectionContainer className="section-container">
      <h4>Morality</h4>
      <Container>
        <StyledEntry>
          <span>10</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>9</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>8</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>7</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>6</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>5</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>4</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>3</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>2</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
        <StyledEntry>
          <span>1</span>
          <Input />
          <DotRating initialRating={0} maxRating={1} />
        </StyledEntry>
      </Container>
    </SectionContainer>
  );
}
