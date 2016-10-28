const React           = require('react');
const { render }      = require('react-dom');
const { Provider }    = require('react-redux');
const { createStore } = require('redux');
const todoApp         = require('../reducers/combineReducers').default;
const { TodoList }    = require('./components/containers');

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app') 
);


