import React, { FC } from 'react'

import { View, PreviewList } from './preview.view'
import { PreviewItem } from './Item/item.component'

type PreviewItem = {
  id: string,
  src: string,
  title: string,
  createdAt: string
}

type BoardPreviewProps = {
  boards: Array<PreviewItem>
}

export const BoardPreview: FC<BoardPreviewProps> = ({ boards }) => {
  const renderPreviewItem = (item: PreviewItem): JSX.Element => {
    return <PreviewItem {...item} children={item.title} />
  }
  return (
    <View>
      <PreviewList items={boards} render={renderPreviewItem} />
    </View>
  )
}
