import styled from 'styled-components'

export const View = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 32px;
  list-style: none;
`
