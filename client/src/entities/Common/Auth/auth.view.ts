import styled from 'styled-components'

export const View = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(p) => p.theme.fz.span};
  font-weight: ${(p) => p.theme.fw.bold};
`

export const Link = styled.a`
  text-decoration: none;
  color: initial;
  margin-right: 16px;
  transition: 0.5s;

  &:hover {
    opacity: 0.75;
  }
`
