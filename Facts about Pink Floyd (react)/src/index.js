import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//components
import Header from './components/header.js';
import FactsList from './components/facts_list.js';
import Footer from "./components/footer";


class App extends Component {

    state = {
        facts: JSON
    };

    render(){
        return (
            <div>
                <Header/>
                <FactsList facts={this.state.facts}/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.querySelector('#root') );