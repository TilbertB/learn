
import React from 'react';
import ReactDOM from 'react-dom';


import Nav from "./components/nav";
import Footer from "./components/footer";



const App = () => {
    return (
        <div>
            <Nav/>
            <Footer/>
        </div>
    )
};


ReactDOM.render( <App/>, document.querySelector('#root') );
export default App;