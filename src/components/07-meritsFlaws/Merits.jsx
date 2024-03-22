import MeritEntry from "./MeritEntry";
import styled from "styled-components";
import { mixinFlex, hoverHighlight, container } from "../../mixins/mixins";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;


export default function Merits() {
  return (
    <Container>
      <h4>Merits</h4>
      <Container>
        <MeritEntry />
        <MeritEntry />
        <MeritEntry />
      </Container>
    </Container>
  );
}
