import { mixinFlex } from "../../mixins/mixins";
import Button from "../Buttons/Button";
import styled from "styled-components";

const StyledModal = styled.div`
  ${mixinFlex("column")}
  position: absolute;
  z-index: 1000;
  background-color: rgba(43, 9, 9, 0.6);
  padding: 2rem;
  border-radius: 10px;
  gap: 0.4rem;
  backdrop-filter: blur(4px);

  div {
    ${mixinFlex}
    gap: .4rem;
  }
`;

export default function ConfirmModal({ isOpen, onConfirm, onClose }) {
  if (!isOpen) {
    return null;
  } else {
    return (
      <StyledModal>
        <h2>Confirm Character Reset</h2>
        <p>Are you sure you want to clear all data?</p>
        <p>Please reload your browser for the changes to take effect.</p>
        <p>*Will fix this soon*</p>
        <div>
          <Button onClick={onConfirm} text={`Yes, clear data`} />
          <Button onClick={onClose} text={`Cancel`} />
        </div>
      </StyledModal>
    );
  }
}
