import { FILTERS } from "./consts";
import { SET_FILTER } from "./actionTypes";

const initialState = FILTERS.ALL;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER:
            const filterName = action.payload.name;
            if (Object.values(FILTERS).includes(filterName)) {
                return action.payload.name;
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default reducer;