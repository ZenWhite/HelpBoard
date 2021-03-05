import React, { FC } from 'react'
import styled from 'styled-components'

import { View } from './header.view'
import { ContentLimiter } from '../Content/Limiter/limiter.component'
import { Logo } from '../Logo/logo.component'
import { Search } from '../Content/Search/search.component'
import { Auth } from '../Auth/auth.component'

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const Header: FC = () => (
  <View>
<<<<<<< HEAD
    <HeaderWrapper>
      <Avatar src="google.com" />
    </HeaderWrapper>
=======
    <ContentLimiter center fill>
      <Logo />

      <Search />

      <Auth />
    </ContentLimiter>
>>>>>>> 84df58849ac5d57488977f2045871099929361cf
  </View>
)
