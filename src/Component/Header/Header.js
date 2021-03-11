import React from 'react';
import './Header.css'
import headerImage from '../../Photo/header-bg.jpg';

const Header = () => {
    return (
        <div className="header">
            <img src={headerImage} alt="headerBackground" />
            <div className="header-overlay">
                <div className="header-title">
                    <h1>Trace Your Favorite Team</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;