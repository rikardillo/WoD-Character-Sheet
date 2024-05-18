import styled from "styled-components";
import { mixinFlex } from "@/common/utils/mixins";
import { Button } from "@/common/components";

const StyledRemoval = styled.div`
  ${mixinFlex()}
  font-size: .6rem;
  gap: 0.6rem;
`;

export default function RemovalPrompt({
  removeFunction,
  id,
  entry,
  setRemovalId,
}) {
  return (
    <StyledRemoval>
      <p>Confirm removal of this {entry}?</p>
      <Button onClick={() => removeFunction(id)} text={`Confirm`} />
      <Button onClick={() => setRemovalId(null)} text={`Cancel`} />
    </StyledRemoval>
  );
}
