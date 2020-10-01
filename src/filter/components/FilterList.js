import React from 'react';
import { FILTERS } from "../consts";
import Filter from "./Filter";

const FilterList = () => {
    return (
        <div className="filter-list">
            {Object.keys(FILTERS).map(filter => {
                return (
                    <Filter key={filter} name={FILTERS[filter]} />
                )
            })}
        </div>
    )
}

export default FilterList;