import React, { useState, FC } from 'react'

import { View, Input, Label } from './search.view'
import Icon from './loupe.svg'

export const Search: FC = () => {
  const [value, setValue] = useState('')
  return (
    <View>
      <Label htmlFor="search-input">
        <Icon />
      </Label>
      <Input
        placeholder="Поиск"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="search-input"
      />
    </View>
  )
}
