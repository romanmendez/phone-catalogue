import React from "react";
import { MainContainer } from "../styles/Components";
import { ClipLoader } from "react-spinners";
import { css } from "styled-components";

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <MainContainer>
      <ClipLoader css={spinner} />
    </MainContainer>
  );
};

export default Loading;
