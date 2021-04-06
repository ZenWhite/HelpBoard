import React, { FC } from 'react'

import { View } from './input.view'

export const CommonInput: FC<{placeholder?: string}> = ({ placeholder = '' }) => <View placeholder={placeholder}/> 