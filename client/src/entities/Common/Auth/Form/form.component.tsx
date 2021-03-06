import React, { FC } from 'react'

import { View } from './form.view'
import { CommonInput } from '../../Input/input.component'
import { Headline1 } from '~entities/Typography/Headline1/headline1.component'
import { Button } from '~entities/Common/Button/button.component'

const Login: FC = () => <>
    <Headline1>Вход</Headline1>
    <View>
        <CommonInput placeholder="Email"/>
        <CommonInput placeholder="Пароль"/>
        <Button type="submit">Войти</Button>
    </View>
</>
const Registration: FC = () => <>
    <Headline1>Регистрация</Headline1>
    <View>
        <CommonInput placeholder="Имя"/>
        <CommonInput placeholder="Email"/>
        <CommonInput placeholder="Пароль"/>
        <CommonInput placeholder="Повторите пароль"/>
        <Button type="submit">Войти</Button>
    </View>
</>

export const AuthForm: FC<{isLogin ?: boolean}> = ({isLogin}) =>
    isLogin ? <Login /> : <Registration />