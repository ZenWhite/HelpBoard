import React, { FC } from 'react'

import { View } from './header.view'
import { ContentLimiter } from '../Content/Limiter/limiter.component'
import { Logo } from '../Header/Logo/logo.component'

export const Header: FC = () => (
  <View>
    <ContentLimiter center fill>
      <Logo />

      {/* Search */}

      {/* Auth */}
    </ContentLimiter>
  </View>
)
