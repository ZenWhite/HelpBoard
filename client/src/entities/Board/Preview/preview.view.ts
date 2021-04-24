import styled from 'styled-components'

import { CommonList } from '~entities/Common/List/list.component'

export const View = styled.section`
  margin-top: 32px;
`
export const PreviewList = styled(CommonList)`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 32px;
  list-style: none;
`