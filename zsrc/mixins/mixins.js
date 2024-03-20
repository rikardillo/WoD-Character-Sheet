export const mixinFlex = (
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center"
) => `
 display: flex;
 flex-direction: ${flexDirection};
 justify-content: ${justifyContent};
 align-items: ${alignItems};
`;

export const hoverHighlight = `
  box-sizing: border-box;
  transition: all .4s;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const container = `
  ${hoverHighlight};
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;


export const sectionContainer = `
  ${mixinFlex("column", "center", "center")};
  ${container};
  width: 50%;
`;