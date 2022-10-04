import React, { memo } from 'react'
import Button from './__styled__/Button'
import useCopyToClipboard from './useCopyToClipboard'
import StyledParticipant from './__styled__/Participant'

type ParticipantProps = {
  name: string
  url: string
}

const Participant = ({ name, url }: ParticipantProps) => {
  const [value, copy] = useCopyToClipboard()
  return (
    <StyledParticipant>
      {name}
      {url && <Button onClick={(_) => copy(url)} value="copy" />}
    </StyledParticipant>
  )
}

export default memo(Participant)
