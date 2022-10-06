import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

type UseParticipant = {
  participants: Participant[]
  dispatch: React.Dispatch<ParticipantAction>
  shuffle: () => void
}

export type Participant = {
  uuid: string
  name: string
  url: string
  wasCopiedToClipboard: boolean
  wasShared: boolean
}

export type ParticipantAction =
  | AddParticipantAction
  | ShuffleAction
  | CopyToClipboardAction
  | ShareAction

type AddParticipantAction = {
  type: 'addParticipant'
  payload: {
    name: string
  }
}

type ShuffleAction = {
  type: 'shuffle'
}

type CopyToClipboardAction = {
  type: 'copyToClipboard'
  payload: {
    uuid: string
  }
}

type ShareAction = {
  type: 'share'
  payload: {
    uuid: string
  }
}

const shuffleParticipants = (input: Participant[]) => {
  const shuffled = input.slice(0)
  for (let i = 0; i < shuffled.length - 1; i++) {
    const switchIndex = Math.floor(
      Math.random() * (shuffled.length - (i + 1)) + i + 1
    )
    const temp = shuffled[i]
    shuffled[i] = shuffled[switchIndex]
    shuffled[switchIndex] = temp
  }
  return shuffled
}

const encode = (input: string) => encodeURIComponent(window.btoa(input))
export const decode = (input: string) => window.atob(decodeURIComponent(input))

const shuffleAndAssign = (input: Participant[]): Participant[] => {
  const shuffledList = shuffleParticipants(input)
  return input.map((it, index) => {
    const target = encode(shuffledList[index].name ?? '')
    const href = new URL(
      '#/show/' + it.name + '/' + target,
      window.location.origin + window.location.pathname
    ).href
    return {
      ...it,
      wasCopiedToClipboard: false,
      wasShared: false,
      url: href,
    }
  })
}

const useParticipant = (): UseParticipant => {
  const participantReducer = (
    state: Participant[],
    action: ParticipantAction
  ) => {
    switch (action.type) {
      case 'addParticipant':
        const newParticipant: Participant = {
          uuid: uuidv4(),
          name: action.payload.name,
          url: '',
          wasCopiedToClipboard: false,
          wasShared: false,
        }
        return shuffleAndAssign([newParticipant, ...state])
      case 'shuffle':
        return shuffleAndAssign(state)
      case 'copyToClipboard':
        return state.map((it) =>
          it.uuid === action.payload.uuid
            ? { ...it, wasCopiedToClipboard: true }
            : it
        )
      case 'share':
        return state.map((it) =>
          it.uuid === action.payload.uuid ? { ...it, wasShared: true } : it
        )
    }
  }
  const [participants, dispatch] = useReducer(participantReducer, [])

  const shuffle = () => dispatch({ type: 'shuffle' })

  return {
    participants,
    dispatch,
    shuffle,
  }
}

export default useParticipant
