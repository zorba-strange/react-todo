const { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } = require('./ACTION_TYPES');

let nextTodoId = 0;

export const addTodo = (text) => {
    return { 
        type: ADD_TODO,
        id: nextTodoId++,
        text,
    };
}

export const toggleTodo = (id) => {
    return { type: TOGGLE_TODO, id }
}

export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter };
}
