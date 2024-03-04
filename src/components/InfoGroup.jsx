import styled from "styled-components";
import InfoEntry from "./InfoEntry";

export default function InfoGroup({ data }) {
  return (
    <StyledInfoGroup>
      {data.map((item, index) => (
        <InfoEntry
          key={index}
          title={item.title}
          placeholder={item.placeholder}
          entry={item.entry}
        />
      ))}
    </StyledInfoGroup>
  );
}

const StyledInfoGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  flex-direction: column;
  gap: 0.4rem;
`;
