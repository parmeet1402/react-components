import styled, { css, createGlobalStyle } from "styled-components";
import fontStyles from "./fontStyles";
import { normalize } from "styled-normalize";
const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
const GlobalStyle = createGlobalStyle`
    ${fontStyles};
    ${normalize};
    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Plus Jakarta Sans, sans-serif;
    
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  } 
`;

export { Flex };
export default GlobalStyle;
