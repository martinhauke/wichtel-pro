import React, { memo, useCallback } from 'react'
import Content from '../__styled__/Content'
import useParticipant from './useParticipant'
import AddParticipantInput from './AddParticipantForm'
import ParticipantList from './ParticipantList'
import Button from './__styled__/Button'

const CreateList = () => {
  const { participants, dispatch, shuffle } = useParticipant()

  const handleAddParticipant = useCallback(
    (name: string) => dispatch({ type: 'addParticipant', payload: { name } }),
    [dispatch]
  )

  return (
    <Content>
      <AddParticipantInput onAddParticipant={handleAddParticipant} />
      <ParticipantList participants={participants} />
      <Button onClick={shuffle} value="randomize" />
    </Content>
  )
}

export default memo(CreateList)
