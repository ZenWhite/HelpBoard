import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '~entities/Common/Button/button.component'
import { View } from './auth-button.view'

export const AuthButton: FC<{ isLogin?: boolean }> = ({ isLogin }) => (
  <View>
    <Link to={`/${ isLogin ? 'login' : 'registration' }`}>
      <Button outline={isLogin}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
    </Link>
  </View>
)
