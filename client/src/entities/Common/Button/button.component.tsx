import React, { FC, SyntheticEvent } from 'react'
import styled from 'styled-components'

type ViewProps = { 
  color?: string,
  outline?: boolean
}

type ComponentProps = {
  className?: string
  action?: (e: SyntheticEvent<HTMLButtonElement>) => void
}

const Component: FC<ComponentProps> = ({ children, className, action }) => (
  <button onClick={action} className={className}>
    {children}
  </button>
)

export const Button = styled(Component)<ViewProps>`
  padding: 0px 1rem;
  height: 36px;
  border: ${ p => p.outline ? "1px solid" : "none" };
  border-radius: ${ (p) => p.theme.br };
  background: ${ (p) => !p.outline ? ( p.theme.color[p.color] || p.theme.color.secondary ) : 'none' };
  font-size: ${(p) => p.theme.color.interaction};
  font-weight: ${(p) => p.theme.fw.medium};
  cursor: pointer;
  transition: ${ (p) => p.theme.at };
  outline: none;

  &:hover {
    transform: scale(0.9);
    opacity: 0.85;
  }
`