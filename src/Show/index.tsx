import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import Content from '../__styled__/Content'
import GiftBuddy from './__styled__/GiftBuddy'
import GiftBuddyLabel from './__styled__/GiftBuddyLabel'
import {decode} from "../CreateList/useParticipant";

const Show = () => {
  const { santa, buddy } = useParams()
  return (
    <Content>
      <GiftBuddyLabel>Hey {santa}!<br/>Your gift buddy is:</GiftBuddyLabel>
      <GiftBuddy>{decode(buddy as string)}</GiftBuddy>
    </Content>
  )
}

export default memo(Show)
