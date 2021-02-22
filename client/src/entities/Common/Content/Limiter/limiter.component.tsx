import React, { FC } from 'react'
import styled from 'styled-components'
import { View, ViewProps } from './limiter.view'

type ComponentProps = { className: string } & ViewProps

export const ContentLimiterView: FC<ComponentProps> = ({ children, className }) => <div className={className}>
    {children}
</div>

const ContentLimiter = styled(ContentLimiterView)`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1320px;
  display: flex;

  ${p => p.column && 'flex-flow: column nowrap;'}
`