import styled from "styled-components";
import Input from "../inputs/Input";
import DotRating from "../DotRating";
import { mixinFlex } from "../../mixins/mixins";

const Container = styled.div`
  ${mixinFlex("column", "space-between")}
  width: 100%;
  height: 100%;
  gap: 0.2rem;
`;

const StyledEntry = styled.div`
  ${mixinFlex("row")};
  gap: 0.4rem;
  width: 100%;

  span {
    width: 5rem;
  }
`;

export default function MoralityEntry() {
  return (
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
  );
}
