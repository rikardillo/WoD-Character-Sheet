import AttributeGroup from "./AttributeGroup";
import att from "../data/attributes";
import styled from "styled-components";
import { mixinFlex } from "../mixins/mixins";

const AttSection = styled.div`
  ${mixinFlex("column")}
  width: 100%;
  gap: 1rem;
  background-color: black;
  padding: 1rem;
  border-radius: 0.4rem;
`;

const AttContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const AttTitleContainer = styled.div`
  ${mixinFlex("column", "center", "center")};

  p {
    ${mixinFlex("row", "flex-start", "center")};
    width: 100%;
    height: 100%;
    font-size: 0.5rem;
    text-transform: uppercase;
  }
`;

export default function AttributesSection({ data }) {
  return (
    <AttSection>
      <h2>Attributes</h2>
      <AttContainer>
        <AttTitleContainer>
          <p>Power</p>
          <p>Finesse</p>
          <p>Resistance</p>
        </AttTitleContainer>
        <AttributeGroup data={att} />
      </AttContainer>
    </AttSection>
  );
}
