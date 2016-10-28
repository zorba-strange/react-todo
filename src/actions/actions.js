const { ADD_TODO }                  = require('./ACTION_TYPES');
const { TOGGLE_TODO }               = require('./ACTION_TYPES');
const { SET_VISIBILITY_FILTER }     = require('./ACTION_TYPES');
const { VisibilityFilters }         =  require('./ACTION_TYPES');


const uuid = () => Math.random().toString(34).slice(2);


export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: uuid,
        text,
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
}
