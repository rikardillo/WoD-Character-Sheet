import styled from "styled-components";

const StyledAttribute = styled.div``;

export default function Attribute({ title, input }) {
  return (
    <StyledAttribute>
      <span>{title}</span>
      <input type="text" name={input} id="" placeholder={title} />
    </StyledAttribute>
  );
}
