import styled from 'styled-components'

const AddParticipantInput = styled.input`
  flex-grow: 1;
  padding: ${(props) => props.theme.spaces.small};

  border: 1px solid ${(props) => props.theme.colors.affirm};
`

export default AddParticipantInput
