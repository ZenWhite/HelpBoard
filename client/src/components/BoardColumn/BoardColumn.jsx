import React, {useState} from 'react'

import {BoardCard} from './BoardCard'

const BoardColumn = ({columnTitle, defaultCards}) => {
    const [cards, setCards] = useState([])

    const createCard = (event) => {
        event.preventDefault()
        const newCards = [...cards, {id: Date.now(), title: 'Edit me', label: 'some'}]
        setCards(newCards)
    }

    return (
        <div className="board-column todo">
            <h2 className="board-column__title">{columnTitle}</h2>

            <button onClick={createCard}>Create card</button>

            {cards.map(({ title, label, id }) => (
                <BoardCard key={id} title={title} label={label}/>
            ))}
        </div>
    )
}

export {
    BoardColumn
}