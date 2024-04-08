//IMPORTS

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NativeDiv } from "./inputs/CheckBox";

// STYLES

const DotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
`;

const Dot = styled(NativeDiv)`
  width: 0.8rem;
  height: 0.8rem;
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

  @media (width <= 900px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

// COMPONENT

const DotRating = ({
  initialRating = 0,
  maxRating,
  id,
  onChange = () => {},
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    let newRating = index + 1;

    if (newRating === rating) {
      newRating = 0;
    }

    setRating(newRating);
    onChange(id, newRating);
  };

  return (
    <DotContainer>
      {[...Array(maxRating)].map((_, index) => (
        <Dot
          key={`${id}-${index}`}
          filled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
    </DotContainer>
  );
};

export default DotRating;
