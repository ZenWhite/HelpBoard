import React, { FC } from 'react'

import { View, TaskContainer } from './board.view'
import { Headline1 } from '../Typography/Headline1/headline1.component'
import { BoardTaskList } from './TaskList/task-list.component'
import { CommonList } from '~entities/Common/List/list.component'

const mockBoard = {
  id: 'sdfjksfkeiru234',
  title: 'Доска 1',
  createdAt: '05.03.21'
}

const mockLists = [
  {
    id: 'list-2345',
    title: 'В планах',
    tasks: [
      {
        id: 'task-12345',
        text: 'Прочитать литературу',
        labels: []
      }
    ]
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

type BoardTask = {
  id: string,
  text: string,
  labels: Array<string>
}

type BoardTaskList = {
  id: string,
  title: string,
  tasks: Array<BoardTask>
}

type BoardProps = {
  title: string,
  taskLists: Array<BoardTaskList>
}

export const Board: FC<BoardProps> = ({ title, taskLists }) => {

  const renderTaskLists = (taskList: BoardTaskList): JSX.Element => {
    return <BoardTaskList list={taskList} />
  }

  return <View>
    <Headline1>{mockBoard.title}</Headline1>
    <TaskContainer items={mockLists} render={renderTaskLists} />
  </View>
}
