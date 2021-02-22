import React, { FC } from 'react'

import { View } from './header.view'
import { ContentLimiter } from '../Content/Limiter/limiter.component'
import { Avatar } from './Avatar/avatar.component'

export const Header: FC = () => (
  <View>
    <ContentLimiter center={true}>
      {/* Logo */}

      {/* Search */}

      {/* Auth */}
    </ContentLimiter>
  </View>
)
