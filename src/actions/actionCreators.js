const { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } = require('./ACTION_TYPES');


export const addTodo = (text) => {
    return { type: ADD_TODO, text };
}

export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter };
}
