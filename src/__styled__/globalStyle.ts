import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    color: ${(props) => props.theme.colors.textDark};
    font-family: Helvetica, sans-serif;
  }

  input, button {
    border-radius: ${(props) => props.theme.borderRadius};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 1rem;
  }

  @media screen and (max-width: ${(props) => props.theme.content.width}) {
    body {
      font-size: 1.5em;
    }
  }
`

export default GlobalStyle
