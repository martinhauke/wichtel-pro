import styled from 'styled-components'

const Participant = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.spaces.small};

  &:nth-last-of-type(2n) {
    background-color: ${(props) => props.theme.colors.defaultBackground};
  }
`

export default Participant
