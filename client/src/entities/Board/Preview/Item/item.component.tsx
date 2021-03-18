import React, { FC } from 'react'

import { View } from './item.view'

type PreviewItem = {
  src: string
  createdAt: string
}

export const PreviewItem: FC<PreviewItem> = ({ children, src, createdAt }) => (
  <View href={src}>
    <h3>{children}</h3>
    <p>{createdAt}</p>
  </View>
)
