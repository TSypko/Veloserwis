import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    --primaryColor: #FF5151;
    --secondaryColor: #EFE;
  }
  *, ::after, ::before {
        box-sizing: inherit;
  }
  body {
    font-family: "Lato", sans-serif;
    font-size: 16px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}`