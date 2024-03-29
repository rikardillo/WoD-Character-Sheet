import DotRating from "../DotRating";
import CheckBox from "../inputs/CheckBox";

import styled from "styled-components";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

const HealthSectionContainer = styled.div`
  ${mixinFlex}
  ${hoverHighlight}
  width: 10rem;
  height: 100%;
  flex-direction: column;
  gap: 0.4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;

  @media (width <= 500px) {
    width: 100%;
  }
`;

const HealthContainer = styled.div`
  ${mixinFlex('row', 'flex-start')};
  width: fit-content;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const Container = styled.div`
  ${mixinFlex("column", "center")};
  gap: 0.6rem;
  flex-wrap: wrap;

  @media (width <= 500px) {
    flex-direction: row;
  }
`;

export default function HealthSection({att}) {
  const stamina = att[5].rating;
  const willpowerStat = att[2].rating + att[8].rating

  return (

    <HealthSectionContainer>
      <Container>
        <>
          <h4>Health</h4>
          <HealthContainer>
            {[...Array(stamina + 5)].map((_, index) => (
              <CheckBox key={index} id={index} />
            ))}
          </HealthContainer>
        </>
        <Container>
          <h4>Willpower</h4>
          <DotRating initialRating={willpowerStat} maxRating={willpowerStat} />
        </Container>
      </Container>
    </HealthSectionContainer>
  );
}
