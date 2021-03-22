import React, { FC } from 'react'

import { View } from './list.view'
import { Headline3 } from '~entities/Typography/Headline3/headline3.component'

type TList = {
  id: string
  title: string
  tasks: Array<any>
}

type BoardListProps = {
  list: TList
}

export const BoardList: FC<BoardListProps> = ({ children, list }) => (
  <View>
    <Headline3>{list.title}</Headline3>
    {list.tasks.map((task) => null)}
  </View>
)
