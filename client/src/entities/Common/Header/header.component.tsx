import React, { FC } from 'react'

import { View } from './header.view'
import { ContentLimiter } from '../Content/Limiter/limiter.component'

export const Header: FC = () => (
  <View>
    <ContentLimiter center fill>
      {/* Logo */}

      {/* Search */}

      {/* Auth */}
    </ContentLimiter>
  </View>
)
