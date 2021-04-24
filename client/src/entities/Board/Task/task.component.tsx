import React, { FC } from 'react'

import { Task } from './task'
import { View } from './task.view'

export const BoardTask: FC<{ task: Task }> = ({ task }) => (
  <View>{task.text}</View>
)
