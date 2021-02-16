import React, { FC } from 'react'
import { CommonList } from '../../Common/list.component'
import { CommonListItem } from '../../Common/listitem.component'

const tasks = [
  { task: 'askflskdg' },
  { task: 'askflskdg' },
  { task: 'askflskdg' },
  { task: 'askflskdg' }
]

export const TaskList: FC = () => (
  <CommonList>
    {tasks.map((task) => (
      <CommonListItem children={task.task} />
    ))}
  </CommonList>
)
