import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//components
import Header from './components/header.js';
import FactsList from './components/facts_list.js';
import Footer from "./components/footer";


class App extends Component {


    state = {
        facts: JSON,
        filtered: []
    };

    getKeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.facts.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        });
        this.setState ({
            filtered
        })
    };

    render(){
        let factsFiltered = this.state.filtered;
        let factsAll = this.state.facts;
        return (
            <div>
                <Header keyword={this.getKeyword}/>
                <FactsList facts={factsFiltered.length === 0 ? factsAll : factsFiltered}/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.querySelector('#root') );