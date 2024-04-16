import { render } from "@testing-library/react";

import { CharacterCard } from "./CharacterCard";

describe("Component - CharacterCard", () => {
  it("should render properly", () => {
    const { asFragment } = render(<CharacterCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
