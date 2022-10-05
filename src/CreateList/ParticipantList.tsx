import React, { memo } from 'react'
import { Participant } from './useParticipant'
import ParticipantListItem from './Participant'
import StyledParticipantList from './__styled__/ParticipantList'

type ParticipantListProps = {
  participants: Participant[]
}

const ParticipantList = ({ participants }: ParticipantListProps) => {
  return (
    <StyledParticipantList>
      {participants.map((participant) => (
        <ParticipantListItem
          key={participant.uuid}
          name={participant.name}
          url={participant.url}
        />
      ))}
    </StyledParticipantList>
  )
}

export default memo(ParticipantList)
