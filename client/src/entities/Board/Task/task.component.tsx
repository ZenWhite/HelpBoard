import React, { FC } from 'react'

import { View } from './task.view'
import { Task } from './task'

export const BoardTask: FC<{ task: Task }> = ({ task }) => (
  <View>{task.text}</View>
)
