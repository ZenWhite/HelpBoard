import React, { FC } from 'react'
import styled from 'styled-components'

type ViewProps = { color?: string }

type ComponentProps = {
    className: string
}

const Component: FC<ComponentProps> = ({ children, className }) => <button className={className}>{children}</button>

export const Button = styled(Component) <ViewProps>`
    padding: 0px 16px;
    height: 36px;
    border: none;
    background: ${p => p.theme.color[p.color] || p.theme.color.secondary};
    border-radius: 8px;
    font-size: ${p => p.theme.color.interaction};
    font-weight: ${p => p.theme.fw.medium};
    cursor: pointer;
`