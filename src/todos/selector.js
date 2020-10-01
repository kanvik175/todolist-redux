import { FILTERS } from '../filter';

const getTodosByFilter = (todos, filterName) => {
    switch(filterName) {
        case FILTERS.UNCOMPLETED:
            return todos.filter(item => !item.complete);
        case FILTERS.COMPLETED:
            return todos.filter(item => item.complete);
        default:
            return todos;
    }
}

export { getTodosByFilter };