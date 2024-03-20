//IMPORTS

import React, { useState } from "react";
import styled from "styled-components";

// STYLES

const DotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
`;

const Dot = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${({ filled }) => (filled ? "white" : "transparent")};
  border: 2px solid
    ${({ filled }) => (filled ? "white" : "rgba(255, 255, 255, 0.1)")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ filled }) =>
      !filled ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.6)"};
  }
`;

// COMPONENT

const DotRating = ({ initialRating = 0, maxRating, onChange }) => {
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
    <DotContainer>
      {[...Array(maxRating)].map((_, index) => (
        <Dot
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
    </DotContainer>
  );
};

export default DotRating;
