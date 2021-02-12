import React from 'react'
import { BoardRow } from '../components/BoardRow'

const Board = () => {
    return (
        <div className="wrap">
            <h1 className="board-title">Project title</h1>
            <BoardRow />
        </div>
    )
}

export {
    Board
}