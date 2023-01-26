import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
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
`;
