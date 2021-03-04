import React, { useState, FC } from 'react'

import { View, Input, SearchButton } from './search.view'

export const Search: FC = () => {
    const [value, setValue] = useState('')
    return (
        <View>
            <Input
                placeholder="Search"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </View>
    )
}