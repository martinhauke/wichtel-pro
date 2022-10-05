// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
      danger: string
      dangerHover: string
      affirm: string
      affirmHover: string
      textLight: string
      textDark: string
      defaultBackground: string
    }

    spaces: {
      large: string
      medium: string
      small: string
    }

    content: {
      width: string
    }
  }
}
