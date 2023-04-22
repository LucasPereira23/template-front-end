import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  html, body{
    height: 100%;
  }

  body{
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  }
` 

export default GlobalStyles