const { connect }               = require('react-redux');
const { toggleTodo }            = require('../actions/actionCreators');
const TodoList                  = require('../components/TodoList');


const getVisibilityTodos = (todos, filter) => {
    switch( filter ){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
}

const mapStateToProps = (state) => {
    return{
        todos: getVisibilityTodos(state.todos, state.visibilityFilter)
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);


export default VisibleTodoList;
