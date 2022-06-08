import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    
    --red:#e52e4D;
    
    --blue:#5429CC;
    --blue-light: #6933ff;

    --green:#33CC95;

    --text-title:#363F5F;
    --text-body: #636cb3;

    --shape: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px (desktop default)
  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px (16 * 93,75%)
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px (16 * 87,5%)
    }
  }

  //REM -> 1rem = font-size
  body{
    background: var(--background);
    -webkit-font-smoothing: antiliased;
  }

  body, input, textarea, button{
    font-family: 'Popins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`