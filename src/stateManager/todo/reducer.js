import uid from 'uuid/v4';
import {
  ADD_TODO,
  TOGGLE_DONE_TODO,
  REMOVE_TODO,
  CLEAR_ALL,
} from './constants';

const initialState = {
  items: JSON.parse(localStorage.getItem('todo-items') || '[]'),
};

const createTodo = text => ({
  id: uid(),
  done: false,
  text,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = createTodo(action.payload);
      const items = [...state.items, todo];
      localStorage.setItem('todo-items', JSON.stringify(items));

      return { ...state, items };
    }

    case REMOVE_TODO: {
      const items = state.items.filter(item => item.id !== action.payload);

      localStorage.setItem('todo-items', JSON.stringify(items));
      return { ...state, items };
    }

    case TOGGLE_DONE_TODO: {
      const items = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        }

        return item;
      });

      localStorage.setItem('todo-items', JSON.stringify(items));
      return { ...state, items };
    }

    case CLEAR_ALL: {
      const items = [];
      localStorage.setItem('todo-items', JSON.stringify(items));
      return { ...state, items };
    }

    default: {
      return state;
    }
  }
};
