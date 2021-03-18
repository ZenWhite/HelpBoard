import React, { FC } from 'react'
import { H1, H2, H3 } from './headline.view'

type HeadlineProps = {
  lvl?: number
}

export const Headline: FC<HeadlineProps> = ({ children, lvl = 1 }) => (
  <>
    {lvl == 1 && <H1>{children}</H1>}
    {lvl == 2 && <H2>{children}</H2>}
    {lvl == 3 && <H3>{children}</H3>}
  </>
)
