import styled from 'styled-components'

const GiftBuddy = styled.div`
  padding: ${(props) => props.theme.spaces.large};
  text-align: center;
  font-size: 3em;

  background-color: ${(props) => props.theme.colors.defaultBackground};
  color: ${(props) => props.theme.colors.textDark};
`

export default GiftBuddy
