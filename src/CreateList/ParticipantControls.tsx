import React, { memo } from 'react'
import Button from './__styled__/Button'
import StyledParticipantControls from './__styled__/ParticipantControls'
import useCopyToClipboard from './useCopyToClipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShareFromSquare,
  faClipboard,
  faClipboardCheck,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Participant, ParticipantAction } from './useParticipant'

type ParticipantControlsProps = {
  participant: Participant
  dispatch: React.Dispatch<ParticipantAction>
}

const ParticipantControls = ({
  participant,
  dispatch,
}: ParticipantControlsProps) => {
  const [value, copy] = useCopyToClipboard()

  // TODO might want to move this to useParticipant
  const handleCopy = (_: any) => {
    copy(participant.url).then(() =>
      dispatch({ type: 'copyToClipboard', payload: { uuid: participant.uuid } })
    )
  }

  // TODO might want to move this to useParticipant
  const handleShare = async () => {
    const data: ShareData = {
      url: participant.url,
      title: 'Wichtel link',
      text: 'link to wichtel',
    }
    if (navigator.share) {
      try {
        await navigator.share(data).then(() => {
          dispatch({ type: 'share', payload: { uuid: participant.uuid } })
        })
      } catch (error) {
        // TODO feedback for user
      }
    }
  }
  return (
    <StyledParticipantControls>
      {participant.url && (
        <Button onClick={handleCopy} wasClicked={participant.wasCopiedToClipboard} value="copy">
          <FontAwesomeIcon
            icon={
              participant.wasCopiedToClipboard ? faClipboardCheck : faClipboard
            }
          />
        </Button>
      )}
      {participant.url && navigator['share'] && (
        <Button onClick={handleShare} wasClicked={participant.wasShared} value="share">
          <FontAwesomeIcon
            icon={participant.wasShared ? faSquareCheck : faShareFromSquare}
          />
        </Button>
      )}
    </StyledParticipantControls>
  )
}

export default memo(ParticipantControls)
