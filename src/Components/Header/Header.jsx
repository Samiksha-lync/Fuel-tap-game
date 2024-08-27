import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
            <svg
                className="logo"
                style={{ width: '50px' }}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 53 41"
              >
                <path
                  style={{ fill: '#000' }}
                  d="M35.54,5.02c-3.38,0-6.5,1.08-9.04,2.92-2.54-1.84-5.67-2.92-9.04-2.92C8.92,5.02,2,11.95,2,20.5s6.92,15.49,15.46,15.49c3.48,0,6.7-1.15,9.28-3.1v.35l.34.23c2.43,1.59,5.34,2.52,8.46,2.52,8.54,0,15.46-6.93,15.46-15.49s-6.92-15.48-15.46-15.48ZM35.54,30.79c-1.96,0-3.79-.55-5.34-1.51,1.41-2.05,2.34-4.46,2.63-7.06l.09-.84h-5.21l-.09.65c-.73,4.96-5,8.77-10.16,8.77-5.67,0-10.27-4.6-10.27-10.29s4.6-10.28,10.27-10.28c1.9,0,3.68.51,5.2,1.41l.15.09c-1.72,2.5-2.73,5.52-2.73,8.78v.9h5.2v-.77s-.01-.13-.01-.13c0-5.68,4.6-10.28,10.27-10.28s10.27,4.6,10.27,10.28-4.6,10.29-10.27,10.29Z"
                />
              </svg>
            </div>
            <button className="nav-toggle" onClick={toggleNavbar}>
                {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <nav className={`navbar ${isNavOpen ? 'responsive_nav' : ''}`}>
                <ul className="items">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Tap
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Wallet" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Wallet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Leaderboard" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Leaderboard
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="button">
                <div className="mainnet">
                    Mainnet <div className="coming-soon">Coming Soon</div>
                </div>
                <div className="testnet">
                    Testnet
                </div>
            </div>
        </header>
    );
}

export default Header;
