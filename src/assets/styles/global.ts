import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    body, html {
        box-sizing: border-box;
        font-family: "Inter", sans-serif !important;

        scroll-behavior: smooth;
    }
`;