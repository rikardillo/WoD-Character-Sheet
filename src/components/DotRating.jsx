import React, { useState } from "react";
import styled from "styled-components";

const DotContainer = styled.div`
  display: flex;
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

const DotRating = ({ initialRating = 0, onChange }) => {
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
      {[...Array(5)].map((_, index) => (
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
