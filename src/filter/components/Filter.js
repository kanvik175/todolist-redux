import React from 'react';
import { connect } from 'react-redux';

import { toggleFilter } from "../actions";

const Filter = (props) => {

    const handleClick = () => props.toggleFilter(props.name);

    return (
        <div
            onClick={handleClick}
            className={`filter-item ${props.name === props.currentFilter ? 'filter-item-active' : ''}`}>
            {props.name}
        </div>
    )
}

const mapsStateToProps = (state) => {
    return {
        currentFilter: state.filter
    }
}

export default connect(mapsStateToProps, { toggleFilter })(Filter);