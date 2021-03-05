import React, { FC } from 'react'

import { AuthButton } from './AuthButton/auth-button.component'

export const Auth: FC = () => <div>
    <AuthButton login />
    <AuthButton registration />
</div>