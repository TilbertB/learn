import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sideNav';
import style from './header.css';

import marvelLogoImg from '../../assets/img/MarvelLogo.svg';

const Header = (props) => {

        const navBars = () => (
          <div className={style.header}>
              <FontAwesome
                name='bars'
                onClick={props.onShowNav}
                style={{
                    color:'#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
              />
              {logo()}
          </div>
        );

        const logo = () => (
            <Link className={style.logo} to='/'>
                <img src={marvelLogoImg} alt="marvel logo"/>
            </Link>
             );

        return (
            <header>
                <SideNavigation {...props}/>
                {navBars()}
            </header>
        );
};

export default Header;
