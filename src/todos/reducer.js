import { ADD_TODO, TOGGLE_COMPLETE } from './actionTypes';

import passGenerator from "../utility/passGenerator";

const initialState = [];


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const id = passGenerator();
            return [
                ...state,
                {
                    content: action.payload.content,
                    id: id,
                    complete: false
                }
            ]
        case TOGGLE_COMPLETE:
            return [...state].map(item => {
                if (item.id === action.payload.id) {
                    item.complete = !item.complete;
                }

                return item;
            })
        default:
            return state;
    }
}

export default reducer;