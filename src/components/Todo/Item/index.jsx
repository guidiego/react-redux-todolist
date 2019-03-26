import React from 'react';

import cs from 'classnames';
import css from './Item.sass';

export const TodoItem = ({ id, text, done, onClick }) => (
    <div className={cs(css.item, { [css.done]: done })}
        onClick={() => onClick(id) }>
        { text }
    </div>
);

export default TodoItem;