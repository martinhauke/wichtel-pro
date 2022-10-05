import React, { memo } from 'react'
import StyledAddParticipantInput from './__styled__/AddParticipantInput'

type AddParticipantInputProps = {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const AddParticipantInput = ({
  name,
  onChange,
  onEnter,
}: AddParticipantInputProps) => {
  return (
    <StyledAddParticipantInput
      name="name"
      placeholder="Participant Name"
      type="text"
      value={name}
      onChange={onChange}
      onKeyDown={onEnter}
    />
  )
}

export default memo(AddParticipantInput)
