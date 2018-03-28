import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';

import SideNav from '../Header/SideNav/SideNav'
import FontAwesome from 'react-fontawesome';

const Header = (props) => {

    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars" 
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    const logo = () => 
        (
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
        )
    

    return (
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
            {navBars()}
                {logo()}
            </div>
        </header>
    );
};

export default Header;