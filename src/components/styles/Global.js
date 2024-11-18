import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        width: 100%;
        height: 4000px;
    }
`