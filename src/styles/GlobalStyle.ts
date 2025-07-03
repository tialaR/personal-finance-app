import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root { 
    height: 100%; 
  }

  html {
    font-size: 1rem; /* 16px */
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.beige[100]};
    color: ${({ theme }) => theme.colors.grey[900]};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button, input, textarea {
    font-family: inherit;
  }

  textarea, input, select {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 
`