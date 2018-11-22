import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Video from "./video.js";
import Photo from "./photo.js";
import Facts from "./home";

const Nav = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul className='menu'>
                    <li className='menu-item'><Link to={'/facts'}>Facts</Link></li>
                    <li className='menu-item'><Link to={'/photo'}>Photo</Link></li>
                    <li className='menu-item'><Link to={'/video'}>Video</Link></li>
                </ul>
                <Switch>
                    <Route path='/video' exact component={Video}/>
                    <Route path='/photo' component={Photo}/>
                    <Route path='/facts' exact component={Facts}/>
                </Switch>
            </nav>
        </BrowserRouter>
            )
};

export default Nav;