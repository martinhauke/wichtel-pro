import styled from 'styled-components'

type ButtonProps = {
    wasClicked?: boolean
}

const Button = styled.button<ButtonProps>`
  padding-top: ${(props) => props.theme.spaces.small};
  padding-bottom: ${(props) => props.theme.spaces.small};
  padding-left: ${(props) => props.theme.spaces.medium};
  padding-right: ${(props) => props.theme.spaces.medium};

  border: none;
  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.wasClicked ? props.theme.colors.affirmHover : props.theme.colors.affirm};
  color: ${(props) => props.theme.colors.textLight};

  &:hover {
    background-color: ${(props) => props.theme.colors.affirmHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.danger};
  }
`

export default Button
