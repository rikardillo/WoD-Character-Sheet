import styled from "styled-components";
import DotRating from "./DotRating";

const StyledAttribute = styled.div`
  display: flex;
`;

export default function Attribute() {
  return (
    <StyledAttribute>
      <span>Intelligence</span>
      <DotRating initialRating={1} />
    </StyledAttribute>
  );
}
