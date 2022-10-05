import styled from 'styled-components'

const ParticipantControls = styled.div`
  button:not(:last-of-type) {
    margin-right: ${(props) => props.theme.spaces.small};
  }
`

export default ParticipantControls
