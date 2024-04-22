import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Archivo', sans-serif;
        width: 100%;
    }

    /* CLASSE GLOBAL */

    .grid-layout {
        max-width: 1130px;
        margin: 0 auto;
        padding: 0 15px;
    }
`