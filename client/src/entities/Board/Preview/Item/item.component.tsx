import React, { FC } from 'react'

import { View } from './item.view'
import { Headline3 } from '~entities/Typography/Headline3/headline3.component'

type PreviewItem = {
  src: string
  createdAt: string
}

export const PreviewItem: FC<PreviewItem> = ({ children, src, createdAt }) => (
  <View href={src}>
    <Headline3>{children}</Headline3>
    <time>{createdAt}</time>
  </View>
)