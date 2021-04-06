import styled from 'styled-components'

export const View = styled.a`
  font-size: ${(p) => p.theme.fz.p};
  font-weight: ${(p) => p.theme.fw.medium};
  color: ${(p) => p.theme.color.black};
  transition: ${(p) => p.theme.at};

  &:hover {
    opacity: 0.8;
  }
`
