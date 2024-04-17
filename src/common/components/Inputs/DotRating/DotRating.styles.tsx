import styled from "styled-components";

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Dot = styled.div<{ $filled?: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ $filled }) => ($filled ? "white" : "transparent")};
  border: 2px solid
    ${({ $filled }) => ($filled ? "white" : "rgba(255, 255, 255, 0.1)")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ $filled }) =>
      !$filled ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.6)"};
  }

  @media (width <= 900px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
