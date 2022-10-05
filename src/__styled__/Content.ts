import styled from 'styled-components'

const Content = styled.div`
  max-width: ${(props) => props.theme.content.width};
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.content.width}) {
    padding: ${(props) => props.theme.spaces.small};
  }
`

export default Content
