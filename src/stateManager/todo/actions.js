import {
  ADD_TODO,
  TOGGLE_DONE_TODO,
  REMOVE_TODO,
  CLEAR_ALL,
} from './constants';

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleDone = id => ({
  type: TOGGLE_DONE_TODO,
  payload: id,
});

export const removeDone = id => ({
  type: REMOVE_TODO,
  payload: id,
});
