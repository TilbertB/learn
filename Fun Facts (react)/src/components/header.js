import React, {Component} from 'react';

class Header extends Component {

    state = {
        active: 'non-active',
        searchWord: ''
    };

    changeSearch =(event) => {
        const value = event.target.value === '' ? 'non-active' : 'active';
        this.setState({
            active: value,
            searchWord: event.target.value
        })
    };

    render () {
        return (
            <header
                className={this.state.active}>
                <input
                    type="text"
                    onChange={this.changeSearch}
                />
            </header>
        )
    }
}
export default Header;