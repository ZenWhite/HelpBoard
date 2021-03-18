import styled from 'styled-components'

export const View = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 32px;
`
