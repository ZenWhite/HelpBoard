import styled from 'styled-components'

export type ViewProps = {
  column?: boolean
  center?: boolean
}

export const View = styled.div<ViewProps>`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1320px;
  display: flex;

  ${p => p.column && `
    flex-flow: row wrap;
  `}

  ${p => p.center && `
    align-items: center;
  `}
`
