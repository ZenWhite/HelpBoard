import React, { FC } from 'react'

import { View } from './avatar.view'

type TAvatar = FC<{
    src: string
}>

export const Avatar: TAvatar = ({ src }) => <View />