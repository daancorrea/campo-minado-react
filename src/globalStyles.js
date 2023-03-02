import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
body {
    background: #222;
    overflow: hidden;
    padding-top: 20px;
  }

  .hover:hover {
  transform: scale(1.08);
}
.box-shadow {
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
}
.border-radius {
  border-radius: 12px;
}

`;
