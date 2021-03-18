import React, { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {
  src: string
  size?: number
}

type ComponentProps = { className?: string }

const Component: FC<ComponentProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const Avatar = styled(Component)<ViewProps>`
  width: ${(p) => p.size || 36}px;
  height: ${(p) => p.size || 36}px;
  border-radius: 50%;
  background: url('${(p) => p.src}') center center / cover;
`
