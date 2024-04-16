import { render } from "@testing-library/react";

import { CharacterDetails } from "./CharacterDetails";

describe("Component - CharacterDetails", () => {
  it("should render properly", () => {
    const { asFragment } = render(
      <CharacterDetails characterSheet={{} as any} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
