import React from 'react'
import {BoardColumn} from '../BoardColumn'

const BoardRow = () => {
    return (
        <div className="flex">
            <BoardColumn title="To Do" target="todo"/>
            <BoardColumn title="Progress" target="progress"/>
            <BoardColumn title="Review" target="review"/>
            <BoardColumn title="Done" target="done"/>
        </div>
    )
}

export {BoardRow}