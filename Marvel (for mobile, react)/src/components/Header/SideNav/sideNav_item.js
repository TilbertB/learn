import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import style from './sideNavStyle.css';

const SideNavItems = () => {

    const items = [
        {

            icon: 'home',
            link: '/'
        },
        {

            icon: 'file-text-o',
            link: '/news'
        },
        {

            icon: 'play',
            link: '/videos'
        },
        {

            icon: 'sign-in',
            link: '/sign-in'
        },
        {

            icon: 'sign-out',
            link: '/sign-out'
        }
    ];

    const showItems = () => {
        return items.map( (item,i) =>{
            return (
                <div key={i} className={style.option}>
                    <Link to={item.link}>
                            <FontAwesome name={item.icon}/>
                    </Link>
                </div>
            )
        } )
    };


    return(
        <div>
            {showItems()}
        </div>
    )
};

export default SideNavItems;