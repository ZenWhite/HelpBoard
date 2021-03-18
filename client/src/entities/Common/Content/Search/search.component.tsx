import React, { useState, FC } from 'react'

import { View, Input, SearchButton } from './search.view'
import Icon from './loupe.svg'

export const Search: FC = () => {
  const [value, setValue] = useState('')
  return (
    <View>
      <Icon />
      <Input
        placeholder="Поиск"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </View>
  )
}
