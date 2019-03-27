import { connect } from 'react-redux';

import { TodoList } from 'components/Todo/List';
import { addTodo, toggleDone, removeDone, clearAll } from 'stateManager/actions'

const mapStateToProps = (state) => ({
    items: state.todo.items,
});

const mapActionsToProps = {
    addTodo, toggleDone, removeDone, clearAll
}

export const TodoListContainer = connect(mapStateToProps, mapActionsToProps)(TodoList);
export default TodoListContainer;