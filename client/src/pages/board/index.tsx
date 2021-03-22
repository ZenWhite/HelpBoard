import React, { FC } from 'react'

import { Headline1 } from '~entities/Typography/Headline1/headline1.component'
import { BoardListContainer } from '~entities/Board/ListContainer/list-container.component'

const mockBoard = {
  id: 'sdfjksfkeiru234',
  title: 'Доска 1',
  createdAt: '05.03.21'
}

const mockLists = [
  {
    id: 'list-2345',
    title: 'В планах',
    tasks: []
  },
  {
    id: 'list-2346',
    title: 'В работе',
    tasks: []
  },
  {
    id: 'list-2347',
    title: 'Сделано',
    tasks: []
  }
]

export const BoardPage: FC = () => (
  <>
    <Headline1>{mockBoard.title}</Headline1>
    <BoardListContainer lists={mockLists} />
  </>
)
