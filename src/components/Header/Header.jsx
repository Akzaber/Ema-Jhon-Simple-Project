import React from 'react';
import logo from'../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const pages = [
        {name: 'Order', href:'/order', id: 1},
        {name: 'Review', href:'/review', id: 2},
        {name: 'Inventory', href:'/inventory', id: 3},
        {name: 'Login', href:'/login', id: 4},
    ];

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    pages.map(page => <a key={page.id} href={page.href}>{page.name}</a>)
                }
            </div>
        </nav>
    );
};

export default Header;