import React from 'react'
import classnames from 'classnames'

import {BoardCard} from './BoardCard'

//Targets for column: todo, progress, review, done

const BoardColumn = ({ target, title, cards = [] }) => {
    const columnClasses = classnames({
        'board-column': true,
        [target]: true
    })
    return (
        <div className={columnClasses}>
            <h2 className="board-column__title">{title}</h2>

            {cards.map(({ title, label }) => (
                <BoardCard title={title} label={label}/>
            ))}
        </div>
    )
}

export {
    BoardColumn
}