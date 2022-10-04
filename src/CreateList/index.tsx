import React, { memo, useCallback } from 'react'
import Content from '../__styled__/Content'
import useParticipant from './useParticipant'
import AddParticipantInput from './AddParticipantInput'
import ParticipantList from './ParticipantList'

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
      <input type="button" onClick={shuffle} value="randomize" />
    </Content>
  )
}

export default memo(CreateList)
