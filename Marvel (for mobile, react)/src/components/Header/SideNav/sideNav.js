import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_item';

const SideNavigation = (props) => {

    return (
                <SideNav
                    showNav={props.showNav}
                    onHideNav={props.onHideNav}
                    navStyle ={{
                        backgroundColor: '#22262a',
                        maxWidth: '100px',
                        padding: '15px'
                     }}
                >
                        <SideNavItems/>
                </SideNav>
    )
};

export default SideNavigation;