import React, { FC } from 'react'

import { Headline1 } from '../../entities/Typography/Headline1/headline1.component'
import { BoardPreview } from '../../entities/Board/Preview/preview.component'

const mockBoards = [
  {
    id: 'sdfjksfkeiru234',
    src: '/board/1',
    title: 'Доска 1',
    createdAt: '05.03.21'
  }
]

export const DashboardPage: FC = () => (
  <>
    <Headline1>Ваши доски</Headline1>
    <BoardPreview boards={mockBoards} />
  </>
)
