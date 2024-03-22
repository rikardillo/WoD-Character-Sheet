import styled from "styled-components";
import Input from "../inputs/Input";
import { mixinFlex } from "../../mixins/mixins";



const Container = styled.div`
  ${mixinFlex('column')}
  width: 90%;
  gap: 0.5rem;
  height: 100%;
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
