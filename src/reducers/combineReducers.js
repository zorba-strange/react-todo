const { combineReducers }         = require('redux');
import * as reducers from './reducers.js';

const todoApp = combineReducers(reducers);

export default todoApp;
