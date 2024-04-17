import { useEffect, useMemo, useState } from "react";
import { Dot, DotContainer } from "./DotRating.styles";

export type DotRatingProps = {
  value: number;
  maxRating: number;
  id: string;
  onChange: (value: number) => void;
};

export const DotRating = ({
  value,
  maxRating,
  id,
  onChange = () => {},
}: DotRatingProps) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handleClick = (index: number) => {
    let newRating = index + 1;

    if (newRating === rating) {
      newRating = 0;
    }

    newRating = newRating || 1;

    setRating(newRating);
    onChange(newRating);
  };

  const dots = useMemo(() => {
    return [...Array(maxRating)].map((_, index) => (
      <Dot
        key={`${id}-${index}`}
        $filled={index < rating}
        onClick={() => handleClick(index)}
      />
    ));
  }, [maxRating, value, rating]);

  return <DotContainer>{dots}</DotContainer>;
};

export default DotRating;
