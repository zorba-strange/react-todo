const { List, Map }               = require('immutable');
const { 
    ADD_TODO, 
    TOGGLE_TODO, 
    SET_VISIBILITY_FILTER, 
    VisibilityFilters 
}                                 = require('../actions/ACTION_TYPES');

const { SHOW_ALL } = VisibilityFilters


export const todos = (state = [], action) => {
    switch( action.type ){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return  state.map((todo, index) => {

                    if( action.index === index ){
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo
                });

        default:
            return state;
    }
};

export const setVisibility = (state = SHOW_ALL, action) => {
    switch( action.type ) {

        case SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state;
    }
};
