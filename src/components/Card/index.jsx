import React from 'react'

import cardStyles from "./card.module.scss"

const Card = () => {
    return (
        <div className={cardStyles.card}>
            <h1>Title Card</h1>
            <h2 className={cardStyles.h2}>Title Card</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Button Card</button>
        </div>
    )
}

export default Card