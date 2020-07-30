import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/"></a>
            <img className="Logo" src={Logo} alt="Logo" />
            
        </nav>
    )
}

export default Menu;