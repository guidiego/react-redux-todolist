import React, { Component } from 'react';

import { TodoItem } from 'components/Todo/Item';
import css from './List.sass';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { newTodo: '' }
    }

    createSuggestions() {
        if (this.state.newTodo.length < 3) {
            return [];
        }

        return this.props.items.filter((item) => {
            return !!item.text.match(
                new RegExp(this.state.newTodo, 'gi')
            )
        })
    }

    inputChange(e) {
        this.setState({ newTodo: e.target.value });
    }

    onInputKeyPress(e) {
        if(e.key == 'Enter'){
            this.props.addTodo(this.state.newTodo);
            this.setState({ newTodo: '' });
        }
    }

    sortDone(a, b) {
        if (a.done && b.done) {
            return 0;
        } else if (a.done) {
            return 1;
        } else {
            return -1;
        }
    }

    render() {
        const { items, removeDone, toggleDone, clearAll } = this.props;
        const suggestions = this.createSuggestions()
        return (
            <div className={css.background}>
                <div className={css.box}>
                    <h3 className={css.title}>
                        Todo List

                        <div className={css.clear} onClick={clearAll}>
                            limpar tudo
                        </div>
                    </h3>
                    <ul className={css.list}>
                        {
                            items.sort(this.sortDone).map((item) => (
                                <TodoItem key={item.id} {...item}
                                    onClick={toggleDone} remove={removeDone} />
                            ))
                        }
                    </ul>
                    {
                        suggestions.length <= 0 ? null : (
                            <ul className={css.suggestions}>
                                <li className={css.stitle}> Opa, parece que você ja tem um ou mais items similares na lista: </li>

                                {
                                    suggestions.map((suggestion) => (
                                        <li key={`suggestion-${suggestion.id}`}> { suggestion.text } </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                    <input className={css.input} placeholder='O que vamos fazer hoje?'
                        value={this.state.newTodo} onChange={(e) => this.inputChange(e)}
                        onKeyPress={(e) => this.onInputKeyPress(e)} />
                </div>
            </div>
        );
    }
}

export default TodoList;