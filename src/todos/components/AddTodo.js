import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions";

function AddTodo({ addTodo }) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(input);

        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={input} onChange={handleChange} type='text' placeholder="Type Todo" />
            <button className="button-submit" type="submit">Add Todo</button>
        </form>
    )
}

export default connect(null, { addTodo })(AddTodo);