import React, { FC } from 'react'

import { View } from './input.view'

//type InputProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const CommonInput: FC<{placeholder: string}> = 
    ({ placeholder = '' }) => <View placeholder={placeholder}/> 