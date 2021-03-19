import React, { FC } from 'react'

import { Headline1 } from '../../entities/Typography/Headline1/headline1.component'

const mockBoard = {
    id: 'sdfjksfkeiru234',
    title: 'Доска 1',
    createdAt: '05.03.21'
}

export const BoardPage: FC = () => <Headline1>{mockBoard.title}</Headline1>
