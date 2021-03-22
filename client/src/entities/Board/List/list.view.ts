import styled from 'styled-components'

export const View = styled.div`
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-radius: ${(p) => p.theme.br.small};
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 2px ${(p) => p.theme.color.black};

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${(p) => p.theme.color.base};
  }
`
