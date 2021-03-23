import React, { FC } from 'react'

import { View, ListHeadline } from './list.view'
import { Headline3 } from '~entities/Typography/Headline3/headline3.component'
import { BoardTask } from '../Task/task.component'

type TList = {
  id: string
  title: string
  tasks: Array<any>
}

type BoardListProps = {
  list: TList
}

export const BoardList: FC<BoardListProps> = ({ children, list }) => {
  console.log(list)
  return (
    <View>
      <ListHeadline>{list.title}</ListHeadline>
      {list.tasks.map((task) => (
        <BoardTask task={task} key={task.id} />
      ))}
    </View>
  )
}
