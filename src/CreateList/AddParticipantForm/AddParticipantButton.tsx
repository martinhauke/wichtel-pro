import React, { memo } from 'react'
import StyledAddParticipantButton from './__styled__/AddParticipantButton'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type AddParticipantButtonProps = {
  onClick: (_: any) => void
}

const AddParticipantButton = ({ onClick }: AddParticipantButtonProps) => {
  return (
    <StyledAddParticipantButton onClick={onClick} value="Add to list">
      <FontAwesomeIcon icon={faPlus} />
    </StyledAddParticipantButton>
  )
}

export default memo(AddParticipantButton)
