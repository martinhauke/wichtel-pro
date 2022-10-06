import React, { memo } from 'react'
import StyledParticipant from './__styled__/Participant'
import ParticipantControls from './ParticipantControls'
import {
  Participant as ParticipantType,
  ParticipantAction,
} from './useParticipant'

type ParticipantProps = {
  participant: ParticipantType
  dispatch: React.Dispatch<ParticipantAction>
}

const Participant = ({ participant, dispatch }: ParticipantProps) => {
  return (
    <StyledParticipant>
      {participant.name}
      <ParticipantControls participant={participant} dispatch={dispatch} />
    </StyledParticipant>
  )
}

export default memo(Participant)
