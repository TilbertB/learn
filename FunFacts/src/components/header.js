import React, {Component} from 'react';

class Header extends Component {

    // state = {
    //     searchWord: ''
    // };

    changeSearch =(event) => {
        this.setState({
            searchWord: event.target.value
        })
    };

    static clickHandler() {
        alert('Why are you clicking ? Go search')
    }

    render () {
        return (
            <header>
            <div
                className='logo'
                onClick={Header.clickHandler}
            >20 Fun Facts About Technology</div>
            <input 
                type="text"
                onChange={this.changeSearch}
                />
            </header>
        )
    }
}
export default Header;