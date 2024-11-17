import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: rgb(235,230,230);
        background: radial-gradient(circle, rgba(235,230,230,1) 43%, rgba(209,189,237,1) 100%);
        margin: 0;
        width: 100%;
    }
`