import React from 'react';

const FactsItem = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.fact}</p>
        </div>
    )
};

export default FactsItem;
