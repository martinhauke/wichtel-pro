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
  target: string
}

type ParticipantAction = AddParticipantAction | ShuffleAction

type AddParticipantAction = {
  type: 'addParticipant'
  payload: {
    name: string
  }
}

type ShuffleAction = {
  type: 'shuffle'
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

const encode = (input: string) => window.btoa(input)

const shuffleAndAssign = (input: Participant[]): Participant[] => {
  const shuffledList = shuffleParticipants(input)
  return input.map((it, index) => {
    const target = encodeURIComponent(encode(shuffledList[index].name ?? ''))
    const href = new URL(
      '#/show/' + target,
      window.location.origin + window.location.pathname
    ).href
    return {
      ...it,
      target,
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
          target: '',
        }
        return shuffleAndAssign([...state, newParticipant])
      case 'shuffle':
        return shuffleAndAssign(state)
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
