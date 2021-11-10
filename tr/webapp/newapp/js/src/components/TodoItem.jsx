import React from 'react';
import { prefixNS } from '../helpers';

const TodoItem = ({ item, onClick }) => {
    return (
        <div className={prefixNS("item") + " " + (item.get("done")? prefixNS("item--done") : "")} onClick={onClick}>
            {item.get("text")}
        </div>
    );
}

export default TodoItem;
