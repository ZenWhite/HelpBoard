import React, { FC } from 'react'

import { View } from './task.view'

type TTask = {
  id: string
  text: string
  labels?: Array<any>
}

type TaskProps = {
  task: TTask
}

export const BoardTask: FC<TaskProps> = ({ task }) => <View>{task.text}</View>
