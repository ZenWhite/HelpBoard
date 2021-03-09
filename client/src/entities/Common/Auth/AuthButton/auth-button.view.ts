import styled from 'styled-components'

import { Button } from '../../Button/button.component'

export const View = styled(Button)`
    &:not(:last-child) {
        margin-right: 12px;
    }
`