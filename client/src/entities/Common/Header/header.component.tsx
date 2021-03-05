import React, { FC } from 'react'
import styled from 'styled-components'

import { View } from './header.view'
import { Wrapper } from '../Content/Wrapper/wrapper.component'
import { Avatar } from './Avatar/avatar.component'

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const Header: FC = () => (
  <View>
    <HeaderWrapper>
      <Avatar src="google.com" />
    </HeaderWrapper>
  </View>
)
