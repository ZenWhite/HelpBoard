import React, { FC } from 'react'

import { View, ListItem } from './list.view'

interface Item {
  id: string
  [key: string]: any
}

type CommonListProps = {
  render(item: { [key: string]: any }): JSX.Element
  items: Array<Item>
}

export const CommonList: FC<CommonListProps> = ({ render, items }) => (
  <View>
    {items.map((item) => (
      <ListItem key={item.id}>{render(item)}</ListItem>
    ))}
  </View>
)
