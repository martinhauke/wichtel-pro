import React, { memo } from 'react'
import { Participant } from './useParticipant'
import useCopyToClipboard from './useCopyToClipboard'

type ParticipantListProps = {
  participants: Participant[]
}

const ParticipantList = ({ participants }: ParticipantListProps) => {
  const [value, copy] = useCopyToClipboard()

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant.uuid}>
          {participant.name}
          {participant.url && (
            <input
              type="button"
              onClick={(_) => copy(participant.url)}
              value="copy"
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default memo(ParticipantList)
