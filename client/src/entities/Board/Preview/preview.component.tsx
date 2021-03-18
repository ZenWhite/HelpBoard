import React, { FC } from 'react'

import { View } from './preview.view'
import { PreviewItem } from './Item/item.component'

type BoardPreviewProps = {
  boards: Array<any>
}

export const BoardPreview: FC<BoardPreviewProps> = ({ boards }) => (
  <View>
    {boards.map(({ src, id, title, createdAt }) => (
      <PreviewItem src={src} key={id} children={title} createdAt={createdAt} />
    ))}
  </View>
)
