import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  :root{
    --color-neutral: #f2f6ff;
    --color-neutral-2: #fafaff;
    --color-neutral-3: #f4f7f7;
    --color-primary: #27ae60;
    --color-primary-dark: #005aff;
    --color-white: #fff;
    --color-dark: #272a33;
  }

  body{    
    font-family: 'Montserrat', sans-serif; 
    color: var(--color-white);
    font-size: 1.2rem;
    font-weight: 500;
  }
  a{
    color: var(--color-white)
  }
  p{
    color: #656565;
  }
  .title-con{
    text-align: center;
  }
`;

export default GlobalStyle;