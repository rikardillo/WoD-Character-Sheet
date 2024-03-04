import React, { useState } from 'react';
import styled from 'styled-components';

const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ filled }) => (filled ? 'white' : 'transparent')};
  border: 2px solid white;
  margin: 0 5px;
  cursor: pointer;
  transition: all .3s;
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
