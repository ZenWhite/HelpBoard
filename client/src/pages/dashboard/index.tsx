import React, { FC } from 'react'

import { Headline } from '../../entities/Typography/Headline/headline.component'
import { BoardPreview } from '../../entities/Board/Preview/preview.component'

const mockBoards = [
  {
    id: 'sdfjksfkeiru234',
    src: '1',
    title: 'Доска 1',
    createdAt: '05.03.21'
  },
  {
    id: 'ksjhfjskhd2df56',
    src: '2',
    title: 'Доска 2',
    createdAt: '06.03.21'
  },
  {
    id: 'ryuivjruwoht345',
    src: '3',
    title: 'Доска 3',
    createdAt: '10.03.21'
  },
  {
    id: 'dfghuireotm6960',
    src: '4',
    title: 'Доска 4',
    createdAt: '12.03.21'
  }
]

export const DashboardPage: FC = () => (
  <>
    <Headline>Ваши доски</Headline>
    <BoardPreview boards={mockBoards} />
  </>
)
