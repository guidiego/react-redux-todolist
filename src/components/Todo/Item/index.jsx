import React from 'react';

import cs from 'classnames';
import css from './Item.sass';

export const TodoItem = ({ id, text, done, onClick, remove }) => (
    <div className={cs(css.item, { [css.done]: done })}
        onClick={() => onClick(id) }>
        { text }
        {
            !done ? null : <div onClick={(e) => {
                e.stopPropagation();
                remove(id);
            }}> x </div>
        }
    </div>
);

export default TodoItem;