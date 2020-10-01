import { ADD_TODO, TOGGLE_COMPLETE } from "./actionTypes";

const addTodo = (value) => {
    return {
        type: ADD_TODO,
        payload: {
            content: value
        }
    }
}

const toggleComplete = id => ({
    type: TOGGLE_COMPLETE,
    payload: {
        id
    }
})

export { addTodo, toggleComplete };