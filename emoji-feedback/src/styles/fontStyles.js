import { css } from "styled-components";
import * as font from "../fonts";

const fontStyles = css`
  @font-face {
    font-family: "Plus Jakarta Sans Bold";
    src: local("Plus Jakarta Sans"),
      url("${font.PlusJakartaSansBold}") format("truetype");
    font-weight: bold;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Bold Italic";
    src: local("Plus Jakarta Sans Bolt Italic"),
      url("${font.PlusJakartaSansBoldItalic}") format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Extra Bold";
    src: local("Plus Jakarta Sans Extra Bold"),
      url("${font.PlusJakartaSansExtraBold}") format("truetype");
    font-weight: bolder;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Extra Bold Italic";
    src: local("Plus Jakarta Sans Extra Bold Italic"),
      url("${font.PlusJakartaSansExtraBoldItalic}") format("truetype");
    font-weight: bolder;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Extra Light";
    src: local("Plus Jakarta Sans Extra Light"),
      url("${font.PlusJakartaSansExtraLight}") format("truetype");
    font-weight: lighter;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Extra Light Italic";
    src: local("Plus Jakarta Sans Extra Light Italic"),
      url("${font.PlusJakartaSansExtraLightItalic}") format("truetype");
    font-weight: lighter;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Italic";
    src: local("Plus Jakarta Sans Italic"),
      url("${font.PlusJakartaSansBoldItalic}") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Light";
    src: local("Plus Jakarta Sans Light"),
      url("${font.PlusJakartaSansLight}") format("truetype");
    font-weight: lighter;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Light Italic";
    src: local("Plus Jakarta Sans Light Italic"),
      url("${font.PlusJakartaSansLightItalic}") format("truetype");
    font-weight: lighter;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Medium";
    src: local("Plus Jakarta Sans Medium"),
      url("${font.PlusJakartaSansMedium}") format("truetype");
    font-weight: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans Medium Italic";
    src: local("Plus Jakarta Sans Medium Italic"),
      url("${font.PlusJakartaSansMediumItalic}") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: local("Plus Jakarta Sans"),
      url("${font.PlusJakartaSans}") format("truetype");
    font-weight: normal;
    font-display: fallback;
  }
`;
export default fontStyles;
