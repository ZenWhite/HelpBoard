import React, { FC, SyntheticEvent, useEffect } from 'react'
import styled from 'styled-components'

import { AuthButton } from './AuthButton/auth-button.component'
import { Avatar } from '../Avatar/avatar.component'
import { View, Link } from './auth.view'

export const Auth: FC = () => {
  return (
    <View>
      <AuthButton isLogin />
      <AuthButton />
    </View>
  )
}

/*
    <Link href='/'>banana</Link>
    <Avatar src="https://globalassets.starbucks.com/assets/c209a66113d145ca90c4363bd32d685f.jpg?impolicy=1by1_wide_1242" />
*/
