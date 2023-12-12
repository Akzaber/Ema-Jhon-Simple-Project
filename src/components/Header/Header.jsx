import React from 'react';
import logo from'../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const pages = [
        {name: 'Order', href:'/order'},
        {name: 'Review', href:'/review'},
        {name: 'Inventory', href:'/inventory'},
        {name: 'Login', href:'/login'},
    ];

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    pages.map(page => <a href={page.href}>{page.name}</a>)
                }
            </div>
        </nav>
    );
};

export default Header;