import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #f4f4f4;
        font-family: sans-serif;
    }
`;

export { GlobalStyle };
