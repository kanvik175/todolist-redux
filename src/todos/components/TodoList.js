import React from 'react';
import { connect } from 'react-redux';
import { getTodosByFilter } from "../selector";

import Todo from './Todo';

function TodoList({ todos }) {
    return (
        <ul className='todo-list'>
            {todos && todos.length ? todos.map(todo => {
                return <Todo key={todo.id} {...todo} />
            }) : 'List is empty'}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: getTodosByFilter(state.todos, state.filter)
    }
}

export default connect(mapStateToProps)(TodoList);