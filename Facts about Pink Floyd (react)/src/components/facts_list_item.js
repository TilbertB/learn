import React from 'react';

const FactsItem = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.fact}</p>
        </div>
    )
};

export default FactsItem;
