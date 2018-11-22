import {Component} from "react";
import React from "react";

//components
import JSON from '../db.json';
import Header from './header.js';
import FactsList from './facts_list.js';

class Facts extends Component {


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

            <div className="global">
                <Header keyword={this.getKeyword}/>
                <FactsList facts={factsFiltered.length === 0 ? factsAll : factsFiltered}/>
            </div>
        )
    }
}

export default Facts;