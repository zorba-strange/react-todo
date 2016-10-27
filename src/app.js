const React           = require('react');
const { render }      = require('react-dom');
const { Provider }    = require('react-redux');
const { createStore } = require('redux');
const reducer         = require('./reducer').default;
const { TodoList }    = require('./containers');

const store = createStore(reducer);

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app') 
);


