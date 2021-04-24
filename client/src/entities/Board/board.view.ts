import styled from "styled-components";

import { CommonList } from '~entities/Common/List/list.component'

export const View = styled.section``
export const TaskContainer = styled(CommonList)`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 280px);
    grid-template-rows: 1fr;
    grid-gap: 40px;
`