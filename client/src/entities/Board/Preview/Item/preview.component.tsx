import React, { FC } from 'react'

import { View, Name } from './preview.view'

type BoardPreviewProps = {
    src: string
}

export const BoardPreview: FC<BoardPreviewProps> = ({ children, src }) => <View href={src}>
    <Name>{children}</Name>
</View>