import React, { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {
  column?: boolean
  center?: boolean,
  fill?: boolean
}

type ComponentProps = { className?: string }

const Component: FC<ComponentProps> = ({ children, className }) => <div className={className}>
  {children}
</div>

export const ContentLimiter = styled(Component) <ViewProps>`
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${p => p.theme.maxWidth};
  display: flex;

  ${p => p.column && 'flex-flow: column nowrap;'}
  ${p => p.center && 'align-items: center;'}
  ${p => p.fill && 'justify-content: space-between;'}
`