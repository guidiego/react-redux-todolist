import {
  ADD_TODO,
  TOGGLE_DONE_TODO,
} from './constants';


export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleDone = id => ({
  type: TOGGLE_DONE_TODO,
  payload: id,
});
