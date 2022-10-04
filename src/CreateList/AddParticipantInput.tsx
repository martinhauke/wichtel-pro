import React, { memo, useCallback, useState } from 'react'

type AddParticipantInputProps = {
  onAddParticipant: (name: string) => void
}

const AddParticipantInput = ({
  onAddParticipant,
}: AddParticipantInputProps) => {
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

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        onKeyDown={handleOnEnter}
      />
    </div>
  )
}

export default memo(AddParticipantInput)
