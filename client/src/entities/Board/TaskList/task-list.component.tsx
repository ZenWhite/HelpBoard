import React, { FC } from 'react'

import { View, ListHeadline } from './task-list.view'
import { BoardTask } from '../Task/task.component'
import { Task } from '../Task/task'
import { CommonList } from '../../Common/List/list.component'

type List = {
  id: string
  title: string
  tasks: Array<any>
}

export const BoardTaskList: FC<{ list: List }> = ({ list }) => {
  const renderTask = (task: Task) => <BoardTask task={task} />

  return (
    <View>
      <ListHeadline>{list.title}</ListHeadline>
      <CommonList render={renderTask} items={list.tasks} />
    </View>
  )
}
