import styled from 'styled-components'

export const View = styled.a`
  padding: 1rem;
  min-height: 160px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: ${(p) => p.theme.br.normal};
  background: ${(p) => p.theme.color.gray};
  color: ${(p) => p.theme.color.white};
  transition: ${(p) => p.theme.at};
  &:hover {
    opacity: 0.9;
  }
`