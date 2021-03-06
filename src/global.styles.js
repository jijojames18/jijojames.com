import { createGlobalStyle } from "styled-components";

import { FontColor, ContentColor } from "./styles/common.styles";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: ${ContentColor};
}

a {
  font-size: 24px;
  font-weight: 300;
  color: ${FontColor};
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    text-decoration: none;
    color: rgba(250, 250, 250, 0.5);
  }
}

span, h1, h2, h3, h6, p, button, input, textarea, label, input::placeholder, textarea::placeholder{
  color: ${FontColor};
  letter-spacing: 0.5px;
}

dl, ol, ul {
  margin-bottom: 0;
}

ul {
  padding: 0px;
  list-style: none;
}

.recaptcha-container {
  display: flex;
  justify-content: center;
  margin: 14px 0;
}

.gallery-container {
  .container-fluid {
    padding: 0px;
    .row {
      margin: 0px;
      .col-md-4, .col-sm-6 {
        padding: 0px
      }
    }
  }
}
`;
