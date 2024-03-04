import styled from "styled-components";
import InfoGroup from "./InfoGroup.jsx";
import data from "../data/data.js";

const StyledInfo = styled.section`
  display: flex;
  gap: 1rem;
  width: 80vw;
  justify-content: space-between;
  background-color: black;
  padding: 2rem;
  border-radius: 0.4rem;
`;

export default function InfoSection() {
  return (
    <StyledInfo>
      <InfoGroup data={data} />
    </StyledInfo>
  );
}
