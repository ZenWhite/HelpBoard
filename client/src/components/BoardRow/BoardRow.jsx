import React from 'react'
import { BoardColumn } from '../BoardColumn'

const BoardRow = () => {
  return (
    <div className="flex">
      <BoardColumn columnTitle="To Do" />
    </div>
  )
}

export { BoardRow }
