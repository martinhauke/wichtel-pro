import React, { memo } from 'react'
import Button from './__styled__/Button'
import StyledParticipantControls from './__styled__/ParticipantControls'
import useCopyToClipboard from './useCopyToClipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare, faCopy } from '@fortawesome/free-solid-svg-icons'

type ParticipantControlsProps = {
  url: string
}

const ParticipantControls = ({ url }: ParticipantControlsProps) => {
  const [value, copy] = useCopyToClipboard()
  const handleShare = async () => {
    const data: ShareData = {
      url,
      title: 'Wichtel link',
      text: 'link to wichtel',
    }
    if (navigator.share) {
      try {
        await navigator.share(data).then(() => {
          console.log('jupp')
        })
      } catch (error) {
        console.log('nope', error)
      }
    }
  }
  return (
    <StyledParticipantControls>
      {url && (
        <Button onClick={(_) => copy(url)} value="copy">
          <FontAwesomeIcon icon={faCopy} />
        </Button>
      )}
      {url && navigator['share'] && (
        <Button onClick={handleShare} value="share">
          <FontAwesomeIcon icon={faShareFromSquare} />
        </Button>
      )}
    </StyledParticipantControls>
  )
}

export default memo(ParticipantControls)
