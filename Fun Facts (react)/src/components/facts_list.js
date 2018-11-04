import React from 'react';
import FactsItem from './facts_list_item';

const FactsList = (props) => {

    const items = props.facts.map( (item) => {
      return (
         <FactsItem key={item.id} item ={item}/>
      )
    });

    return (
        <div
        className='main'>
            {items}
        </div>
    )
};

export default FactsList;