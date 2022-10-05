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
`

export default GlobalStyle
