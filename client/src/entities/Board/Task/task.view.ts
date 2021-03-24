import styled from 'styled-components'

export const View = styled.div`
  padding: 0.5rem;
  min-width: 100%;
  background: #fff;
  font-size: 1rem;
  color: ${(p) => p.theme.color.gray};
  border-radius: ${(p) => p.theme.br.small};
  cursor: grab;
`
