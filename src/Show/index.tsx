import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  const { code } = useParams()
  return <div>{window.atob(decodeURIComponent(code as string))}</div>
}

export default memo(Show)
