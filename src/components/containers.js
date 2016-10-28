const { connect }             = require('react-redux');
const { addTodo, toggleTodo } = require('./actions');

import * as components from './components';

export const TodoList = connect(
    function mapStateToProps(state){
        return { todos: state }
        },
    function mapDispatchToProps(dispatch){
        return{
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(components.TodoList);
