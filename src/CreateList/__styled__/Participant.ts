import styled from 'styled-components'

const Participant = styled.li`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  // Prevent jumping when buttons get added
  min-height: calc(1em + 4 * ${(props) => props.theme.spaces.small});

  padding: ${(props) => props.theme.spaces.small};

  &:nth-last-of-type(even) {
    background-color: ${(props) => props.theme.colors.defaultBackground};
  }
`

export default Participant
