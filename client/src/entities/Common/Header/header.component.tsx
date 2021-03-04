import React, { FC } from 'react'

import { View } from './header.view'
import { ContentLimiter } from '../Content/Limiter/limiter.component'
import { Logo } from '../Logo/logo.component'
import { Search } from '../Content/Search/search.component'
import { Auth } from '../Auth/auth.component'

export const Header: FC = () => (
  <View>
    <ContentLimiter center fill>
      <Logo />

      <Search />

      <Auth />
    </ContentLimiter>
  </View>
)
