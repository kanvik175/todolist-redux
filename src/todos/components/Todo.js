import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from "../actions";

const Todo = (props) => {

    const handleClick = () => {
        props.toggleComplete(props.id);
    }

    return (
        <li onClick={handleClick} className={`${props.complete ? 'todo-cross' : ''} todo-item`}>{props.content}</li>
    )
}

export default connect(null, { toggleComplete })(Todo);