import React from 'react'
import Items from '../items/Items'

const List = ({ itemTxt }) => {
    return (
        <ul className="flex flex-col items-center cursor-pointer">
            <Items itemTxt={itemTxt} />
        </ul>
    )
}

export default List