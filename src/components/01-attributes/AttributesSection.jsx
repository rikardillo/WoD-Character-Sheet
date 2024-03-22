import DotRating from "../DotRating";
import data from "../../data/attributes";
import styled from "styled-components";
import { mixinFlex, hoverHighlight } from "../../mixins/mixins";

const AttSection = styled.div`
  ${mixinFlex("column")}
  ${hoverHighlight}
  width: 100%;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 1rem;
  border-radius: 0.4rem;
`;

const AttContainer = styled.div`
  ${mixinFlex("row", "center", "center")};
  width: 100%;
  gap: 0.5rem;
`;

const AttTitleContainer = styled.div`
  ${mixinFlex("column", "space-around", "center")};
  height: 100%;

  p {
    ${mixinFlex("row", "flex-end", "center")};
    width: 100%;
    font-size: 0.4rem;
    text-transform: uppercase;
    text-align: right;
  }
`;

const StyledAttributes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const StyledAttribute = styled.div`
  ${mixinFlex("row", "space-between", "center")};
  ${hoverHighlight};
  gap: 0.2rem;
  padding: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;

  span {
    font-size: 0.5rem;
    text-transform: uppercase;
  }
`;

export default function AttributesSection() {
  return (
    <AttSection>
      <h4>Attributes</h4>
      <AttContainer>
        <AttTitleContainer>
          <p>Power</p>
          <p>Finesse</p>
          <p>Resistance</p>
        </AttTitleContainer>
        <StyledAttributes>
          {data.map((item, index) => (
            <StyledAttribute key={index}>
              <span>{item.title}</span>
              <DotRating initialRating={item.rating} maxRating={5} />
            </StyledAttribute>
          ))}
        </StyledAttributes>
      </AttContainer>
    </AttSection>
  );
}
