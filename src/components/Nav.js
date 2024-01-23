import React from 'react';
import '../style/nav.css';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Main Page</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/highscores" className="nav-link">Highscores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guide" className="nav-link">Tibia Guide</Link>
                    </li>
                </ul>
            </div>

            <div className="nav-item-right">
                <a href="/login" className="nav-link">Zaloguj</a>
                <a href="/register" className="nav-link">Zarejestruj</a>
            </div>

        </nav>
    );
};

export default NavBar;