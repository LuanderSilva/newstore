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
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
        font-family: 'Archivo', sans-serif;
        background-color: #16161A;
        width: 100%;
    }

    /* CLASSE GLOBAL */

    .grid-layout {
        max-width: 1250px;
        margin: 0 auto;
        padding: 0 30px;
    }
`