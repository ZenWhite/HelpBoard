import React, { FC } from 'react'

import { View } from './list-container.view'
import { BoardList } from '../List/list.component'

type BoardListContainerProps = {
  lists: Array<any>
}

export const BoardListContainer: FC<BoardListContainerProps> = ({ lists }) => (
  <View>
    {lists.map((list) => (
      <BoardList list={list} key={list.id} />
    ))}
  </View>
)
