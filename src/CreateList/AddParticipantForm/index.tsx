import React, { memo, useCallback, useState } from 'react'
import StyledAddParticipantForm from './__styled__/AddParticipantForm'
import AddParticipantButton from './AddParticipantButton'
import AddParticipantInput from './AddParticipantInput'

type AddParticipantFormProps = {
  onAddParticipant: (name: string) => void
}

const AddParticipantForm = ({ onAddParticipant }: AddParticipantFormProps) => {
  const [name, setName] = useState('')

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value),
    []
  )

  const handleOnEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onAddParticipant(name)
        setName('')
      }
    },
    [name, onAddParticipant]
  )

  const handleOnClick = useCallback(
    (_: any) => {
      onAddParticipant(name)
      setName('')
    },
    [name, onAddParticipant]
  )

  return (
    <StyledAddParticipantForm>
      <AddParticipantInput
        name={name}
        onChange={handleNameChange}
        onEnter={handleOnEnter}
      />
      <AddParticipantButton onClick={handleOnClick} />
    </StyledAddParticipantForm>
  )
}

export default memo(AddParticipantForm)
