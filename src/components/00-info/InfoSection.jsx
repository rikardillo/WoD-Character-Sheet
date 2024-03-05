import styled from "styled-components";
import InfoGroup from "./InfoGroup.jsx";
import data from "../../data/data.js";

const StyledInfo = styled.section`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

export default function InfoSection() {
  return (
    <StyledInfo>
      <InfoGroup data={data} />
    </StyledInfo>
  );
}
