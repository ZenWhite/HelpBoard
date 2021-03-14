import styled from 'styled-components'

export const View = styled.a`
    width: 320px;
    height: 160px;
    display: block;
    background: ${ p => p.theme.color.base };
`

export const Name = styled.h3`
    color: ${ p => p.theme.color.white };
`