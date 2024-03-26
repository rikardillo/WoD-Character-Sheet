//IMPORTS

import React, { useState, useEffect } from "react";
import styled from "styled-components";

// STYLES

const DotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
`;

const Dot = styled.div`
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
`;

// COMPONENT

const DotRating = ({ initialRating = 0, maxRating, id}) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    // Retrieve the saved rating from local storage when the component mounts
    const savedRating = localStorage.getItem(id);
    if (savedRating !== null) {
      setRating(Number(savedRating));
    }
  }, [id]);

  useEffect(() => {
    // Save the rating to local storage whenever it changes
    localStorage.setItem(id, rating);
  }, [rating, id]);

  const handleClick = (index) => {
    let newRating = index + 1;

    if (newRating === rating) {
      newRating = 0;
    }

    setRating(newRating);
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
