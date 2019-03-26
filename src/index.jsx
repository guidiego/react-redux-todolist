import React from 'react';
import ReactDOM from 'react-dom';

import store from 'stateManager/store';

import { Provider } from 'react-redux';
import { TodoListContainer } from 'containers/todo/List';

ReactDOM.render((
    <Provider store={store}>
        <TodoListContainer />
    </Provider>
), document.getElementById('todo-sample'));