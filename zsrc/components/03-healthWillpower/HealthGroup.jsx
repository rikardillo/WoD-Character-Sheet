import { useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { mixinFlex } from "../../mixins/mixins";
import att from "../../data/attributes";
import Willpower from "./Willpower";

const attributes = { ...att };
const stamina = attributes[5].rating;

// STYLES

const HealthContainer = styled.div`
  ${mixinFlex};
  gap: 0.2rem;
`;

const Container = styled.div`
  ${mixinFlex("column", "center")};
  gap: 2rem;
`;

// COMPONENT

const HealthGroup = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    let newRating = index + 1;

    if (newRating === rating) {
      newRating = 0;
    }

    setRating(newRating);
    onChange(newRating);
  };

  return (
    <Container>
      <HealthContainer>
        {[...Array(stamina + 5)].map((_, index) => (
          <CheckBox
            key={index}
            filled={`${index < rating}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </HealthContainer>
      <Willpower />
    </Container>
  );
};

export default HealthGroup;
