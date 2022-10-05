import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import Content from '../__styled__/Content'
import GiftBuddy from './__styled__/GiftBuddy'
import GiftBuddyLabel from './__styled__/GiftBuddyLabel'

const Show = () => {
  const { code } = useParams()
  return (
    <Content>
      <GiftBuddyLabel>Your gift buddy is:</GiftBuddyLabel>
      <GiftBuddy>{window.atob(decodeURIComponent(code as string))}</GiftBuddy>
    </Content>
  )
}

export default memo(Show)
