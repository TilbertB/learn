import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/home/Home';
import Promises from '../components/promises/Promises';
import About from '../components/about/About';
import Authentication from '../components/authentication/Authentication';
import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../images/logo1.png';

export default function Navigation() {
  const NavGeneral = styled.div`
    text-transform: uppercase;
    font-family: 'Prompt', sans-serif;
    font-weight: black;
  `;
  
  const NavItems = styled.div`
    font-size: 0.85rem;
    padding-left: 25px;
  `;


  return (
      <Router>
        <div className="container">
          <NavGeneral>
            <Navbar expand="lg">
              <Navbar.Brand href="/" className="pl-5">
                <img
                  src={logo}
                  width="40px"
                  height="40px"
                  alt="Deru logo"
                />
                <span className="ml-2">Deru</span>
              </Navbar.Brand>
              <Navbar.Toggle children="Menu"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <NavItems  className="ml-auto">
                  <Nav>
                    <Nav.Link href="/promises">Search promises</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                  </Nav>
                </NavItems>
              </Navbar.Collapse>
            </Navbar>
          </NavGeneral>
          
          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/promises" component={Promises}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Authentication}/>
          </Switch>
          </div>
      </Router>     
  )
}
