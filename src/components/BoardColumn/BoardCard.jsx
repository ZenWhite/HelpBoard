import React from 'react'

const BoardCard = ({ title, label}) => {
    return (
        <div className="board-card">
            <h3 className="board-card__title">{title}</h3>
            <div className="flex board-card__content">
                <span className="board-card__label">{label}</span>
            </div>
        </div>
    )
}

export {BoardCard}