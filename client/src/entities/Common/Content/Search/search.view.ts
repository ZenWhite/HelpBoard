import styled from 'styled-components'

export const View = styled.form`
    padding: 0 20px;
    min-width: 280px;
    height: 36px;
    display: flex;
    align-items: center;
    background: ${p => p.theme.color.grayLight};
    border-radius: 8px;

    svg {
        max-height: 40%;
        fill: ${p => p.theme.color.gray};
        margin-right: 16px;
    }
`

export const Input = styled.input`
    color: ${p => p.theme.color.gray};
    font-size: ${p => p.theme.fz.span};
    background: none;
    border: none;
    

    &:focus {
        outline: none;
    }
`

export const SearchButton = styled.button``
