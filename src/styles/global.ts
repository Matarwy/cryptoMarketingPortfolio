import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1rem;
 background: #3E54AC;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
 -webkit-font-smoothing: antialiased; 
}
button {
  cursor: pointer;
  outline: none;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 6rem;
 color: #ECF2FF;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 6rem;
  color: #ECF2FF;
}

a {
  text-decoration: none; 
  display: inline-block; 
  color: #ECF2FF;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 22px;

 :hover {
   color: #BFACE2;
 }
}
 
p {
  text-indent: 1rem;
  font-size: 1.125rem;
  color: #ECF2FF;
  line-height: 22px;

}

`;
