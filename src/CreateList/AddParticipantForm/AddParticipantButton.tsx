import React, { memo } from 'react'
import StyledAddParticipantButton from './__styled__/AddParticipantButton'

type AddParticipantButtonProps = {
  onClick: (_: any) => void
}

const AddParticipantButton = ({ onClick }: AddParticipantButtonProps) => {
  return <StyledAddParticipantButton onClick={onClick} value="+" />
}

export default memo(AddParticipantButton)
