import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  ul, ol, li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  :root {
    --brand: #0F52BA;
    --grey-1: #2C2C2C;
    --grey-2: #373737;
    --grey-3: #BFBFBF;
    --grey-4: #E5E5E5;
    --grey-5: #EEEEEE;
    --white: #FFFFFF;
    --black: #000000;
  }
`;
