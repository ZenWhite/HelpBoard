import React, { FC } from 'react'

import { View } from './header.view'
import { Wrapper } from '../Content/Wrapper/wrapper.component'
import { Avatar } from './Avatar/avatar.component'

export const Header: FC = () => (
  <View>
    <Wrapper>
      <Avatar src="google.com" />
    </Wrapper>
  </View>
)
