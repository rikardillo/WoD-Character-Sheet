import DotRating from "../DotRating";
import CheckBox from "../inputs/CheckBox";

import styled from "styled-components";
import att from "../../data/attributes";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

const attributes = { ...att };
const stamina = attributes[5].rating;

const HealthSectionContainer = styled.div`
  ${mixinFlex}
  ${hoverHighlight}
  width: 10rem;
  height: fit-content;
  flex-direction: column;
  gap: 0.4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

const HealthContainer = styled.div`
  ${mixinFlex};
  gap: 0.2rem;
`;

const Container = styled.div`
  ${mixinFlex("column", "center")};
  gap: .6rem;
`;

export default function HealthSection() {
  return (
    <HealthSectionContainer>
      <h4>Health</h4>
      <Container>
        <HealthContainer>
          {[...Array(stamina + 5)].map((_, index) => (
            <CheckBox key={index} />
          ))}
        </HealthContainer>
        <Container>
          <h4>Willpower</h4>
          <DotRating initialRating={0} maxRating={6} />
        </Container>
      </Container>
    </HealthSectionContainer>
  );
}
