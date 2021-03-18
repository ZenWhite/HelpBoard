import React, { FC } from 'react'

import { View } from './auth-button.view'

type AuthButtonProps = {
  login?: boolean
  registration?: boolean
}

export const AuthButton: FC<AuthButtonProps> = ({ login, registration }) => (
  <View>
    {login && 'Вход'}
    {registration && 'Регистрация'}
  </View>
)
