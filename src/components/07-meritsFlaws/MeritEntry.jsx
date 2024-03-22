import styled from "styled-components";
import Input from "../inputs/Input";
import DotRating from "../DotRating";
import { mixinFlex } from "../../mixins/mixins";

const MeritContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
`;

const RatingContainer = styled.div`
  ${mixinFlex};
  width: 7rem;
`;

export default function MeritEntry() {
  return (
    <MeritContainer>
      <Input />
      <RatingContainer>
        <DotRating initialRating={0} maxRating={5} />
      </RatingContainer>
    </MeritContainer>
  );
}

