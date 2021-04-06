import styled from 'styled-components'

export const View = styled.input`
    padding: 1rem;

    display: block;

    width: 100%;
    height: 46px;

    background: #fafafa;

    color: ${ p => p.theme.color.black };

    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);

    border: none;
    border-radius: ${ p => p.theme.br.small };

    font-size: 1rem;
`