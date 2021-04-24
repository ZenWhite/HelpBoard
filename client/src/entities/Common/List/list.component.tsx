import React, { FC } from 'react'
import styled from 'styled-components'

interface Item {
  id: string
  [key: string]: any
}

type CommonListProps = {
  render(item: { [key: string]: any }): JSX.Element
  items: Array<Item>,
  className?: string
}

const Component: FC<CommonListProps> = ({ render, items, className }) => (
  <ul className={className}>
    {items.map((item) => (
      <li key={item.id}>{render(item)}</li>
    ))}
  </ul>
)

export const CommonList = styled(Component)`
  list-style: none;
`