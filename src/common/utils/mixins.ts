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

export const inputStyles = `
  display: inline-block;
  font-family: "Inknut-Antiqua";
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: transparent;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  outline: 1px solid rgba(255, 255, 255, 0.2);

  &:focus,
  &:active {
    display: inline-block;
    font-family: "Inknut-Antiqua";
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: transparent;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    outline: 1 solid rgba(255, 255, 255, 0.4);
  }
`;
