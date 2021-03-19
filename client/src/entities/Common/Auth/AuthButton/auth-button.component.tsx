import React, { FC } from 'react'
import { Button } from '~entities/Common/Button/button.component'

import { View } from './auth-button.view'

type AuthButtonProps = {
  isLogin?: boolean
}

export const AuthButton: FC<AuthButtonProps> = ({ isLogin }) => <View>
  <Button outline={isLogin}>{ isLogin ? "Войти" : "Регистрация" }</Button>
</View>