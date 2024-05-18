import { useState, useEffect } from "react";

import {
  StyledCounterContainer,
  StyledArrowUp,
  StyledArrowDown,
} from "./Counter.styles";

export type CounterProps = Omit<JSX.IntrinsicElements["div"], "onChange"> & {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
};

export const Counter = ({
  value,
  label,
  onChange = () => {},
  ...props
}: CounterProps) => {
  const [counterValue, setCounterValue] = useState(value ?? 0);
  const handleUpdateCount = (newValue: number) => {
    setCounterValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setCounterValue(value ?? 0);
  }, [value]);

  return (
    <StyledCounterContainer {...props}>
      <div className="control-value">
        <div>{counterValue}</div>
        <div>
          <StyledArrowUp onClick={() => handleUpdateCount(counterValue + 1)} />
          <StyledArrowDown
            onClick={() => {
              if (counterValue > 0) {
                handleUpdateCount(counterValue - 1);
              }
            }}
          />
        </div>
      </div>
      {!!label && <label>{label}</label>}
    </StyledCounterContainer>
  );
};

export default Counter;
