import React from 'react';



const Header = (props) => {
    return (
        <header
            className="header">
            <input
                type="text"
                onChange={props.keyword}
            />
        </header>
    )
};

export default Header;