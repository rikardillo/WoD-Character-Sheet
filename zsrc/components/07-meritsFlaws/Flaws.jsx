import styled from "styled-components";
import Input from "../inputs/Input";
import { mixinFlex, hoverHighlight, container } from "../../mixins/mixins";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export default function Flaws() {
  return (
    <Container>
      <h4>Flaws</h4>
      <Container>
          <Input />
          <Input />
          <Input />
      </Container>
    </Container>
  );
}
