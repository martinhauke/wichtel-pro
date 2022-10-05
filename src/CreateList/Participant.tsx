import React, { memo } from 'react'
import StyledParticipant from './__styled__/Participant'
import ParticipantControls from './ParticipantControls'

type ParticipantProps = {
  name: string
  url: string
}

const Participant = ({ name, url }: ParticipantProps) => {
  return (
    <StyledParticipant>
      {name}
      <ParticipantControls url={url} />
    </StyledParticipant>
  )
}

export default memo(Participant)
