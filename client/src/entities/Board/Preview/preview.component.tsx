import React, { FC } from 'react'

import { View } from './preview.view'
import { PreviewItem } from './Item/item.component'
import { CommonList } from '~entities/Common/List/list.component'

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
     <CommonList items={boards} render={renderPreviewItem} />
    </View>
  )
}
