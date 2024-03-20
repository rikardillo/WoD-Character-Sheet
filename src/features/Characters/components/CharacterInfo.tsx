import InputText from "@/components/Input/InputText";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { hoverHighlight } from "@/util/mixins";

import { InformationInput } from "..";
import { HighlightContainer } from "@/components/Containers";
import React, { useState } from "react";

export type Props = React.JSX.IntrinsicElements["div"] & {
  data: InformationInput[];
};

export const CharacterInfo = ({ data, ...props }: Props) => {
  const [characterInfo, setCharacterInfo] = useState<{
    [key: string]: string;
  }>({});
  const { t } = useTranslation();
  return (
    <HighlightContainer {...props}>
      <StyledInfoGroup>
        {data.map((input) => (
          <InputText
            key={input.id}
            placeholder={t(input.id)}
            defaultValue={characterInfo[input.id]}
            value={characterInfo[input.id]}
            onChange={(e) => {
              setCharacterInfo({
                ...characterInfo,
                [input.id]: e.target.value,
              });
            }}
          />
        ))}
      </StyledInfoGroup>
    </HighlightContainer>
  );
};

const StyledInfoGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-auto-flow: row;
  gap: 0.8rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
  }
`;

export default CharacterInfo;
