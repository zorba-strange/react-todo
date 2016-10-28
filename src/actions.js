const uuid = () => Math.random().toString(34).slice(2);

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uuid,
            isDone: false,
            text,
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id,
    }
}
