import styled, { createGlobalStyle, css } from "styled-components";
import fontStyles from "./fontStyles";
import { normalize } from "styled-normalize";

export const Flex = styled.div`
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

export const Heading = styled.h1`
  font-size: 52px;
  font-family: Plus Jakarta Sans Bold;
  margin: 20px 0 28px;
`;

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 600px;
  /* To avoid the blue-hightlight color when tapped on images */
  -webkit-tap-highlight-color: transparent;
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

export default GlobalStyle;
