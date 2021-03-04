import styled from 'styled-components'

export const View = styled.button`
    padding: 8px 16px;
    border: none;
    background: ${p => p.theme.color.secondary};
    border-radius: 8px;
    font-size: ${p => p.theme.color.interaction};
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 12px;
    }
`