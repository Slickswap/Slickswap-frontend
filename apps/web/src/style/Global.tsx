import { createGlobalStyle } from "styled-components";
import { PancakeTheme } from "@pancakeswap/uikit";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: var(--font-poppins), sans-serif;
  }
  body {
    background-color: #000b1a;
    // background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
