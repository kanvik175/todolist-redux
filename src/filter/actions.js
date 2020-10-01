import { SET_FILTER } from "./actionTypes";

const toggleFilter = (filterName) => ({
    type: SET_FILTER,
    payload: {
        name: filterName
    }
})

export { toggleFilter };