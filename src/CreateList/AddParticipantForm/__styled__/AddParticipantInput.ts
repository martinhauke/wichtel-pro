import styled from 'styled-components'

const AddParticipantInput = styled.input`
  flex-grow: 1;
  padding-top: ${(props) => props.theme.spaces.small};
  padding-bottom: ${(props) => props.theme.spaces.small};
  padding-left: ${(props) => props.theme.spaces.medium};
  padding-right: ${(props) => props.theme.spaces.medium};

  border: 1px solid ${(props) => props.theme.colors.affirm};
`

export default AddParticipantInput
