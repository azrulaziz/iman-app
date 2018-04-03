import React from 'react';
import '../styles/menu.css';

const Menu = (prop) => {
    const {handleSideMenu, toggle} = prop;
    return (
        <div className="menu-bg">
        <div className="menu" onClick={handleSideMenu}>
            <div className={toggle ? 'rotate' : ''}>
                <div className="menu-bar menu-bar-1"></div>
                <div className="menu-bar menu-bar-2"></div>
            </div>
        </div>
        </div>
    )
}

export default Menu