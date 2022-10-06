import React, { memo } from 'react'
import { Participant, ParticipantAction } from './useParticipant'
import ParticipantListItem from './Participant'
import StyledParticipantList from './__styled__/ParticipantList'

type ParticipantListProps = {
  participants: Participant[]
  dispatch: React.Dispatch<ParticipantAction>
}

const ParticipantList = ({ participants, dispatch }: ParticipantListProps) => {
  return (
    <StyledParticipantList>
      {participants.map((participant) => (
        <ParticipantListItem
          key={participant.uuid}
          participant={participant}
          dispatch={dispatch}
        />
      ))}
    </StyledParticipantList>
  )
}

export default memo(ParticipantList)
