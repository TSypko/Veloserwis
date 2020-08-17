import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    --primary: #FF5151;
    --primaryHalfOpacity: #FF5151CC;
    --secondary: #EFE;
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
  }
  a {
    text-decoration: none;
  }
  `