import styled from "styled-components";
import HealthGroup from "./HealthGroup";
import { mixinFlex } from "../../mixins/mixins";

const HealthContainer = styled.div`
  ${mixinFlex}
  flex-direction: column;
  gap: .4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

export default function HealthSection() {
  return (
    <HealthContainer>
      <h4>Health</h4>
      <HealthGroup />
    </HealthContainer>
  );
}
