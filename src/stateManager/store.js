import { createStore, combineReducers } from 'redux';

import todo from './todo/reducer';

export default createStore(
  combineReducers({ todo }),
);
