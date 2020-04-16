import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, loginLink, signupLink }) => {
    const protectedNav = () => (
        <nav className="navbar">
            <div className="pacacamp-container">
                <Link to="/"><img className="pacacamp" src={window.pacacamp} alt="PacaCamp"/></Link>
            </div>

            <div className="user-menu">
                <div className="trips">
                    <Link to={`/users/${currentUser.id}/trips`}>Trips</Link>
                </div>

                <div className="dropdown-container">
                    <img className="alpaca" src={window.alpaca} alt="alpaca"/>
                    
                    <ul className="dropdown-menu">
                        <li><Link to={`/users/${currentUser.id}`} className="dropdown-item">Manage account</Link></li>
                        <li className="divider"></li>
                        <li><span
                        className="dropdown-item" onClick={logout}>Log out</span></li>    
                    </ul>
                </div>
            </div>
        </nav>      
    );

    const authNav = () => (
        <nav className="navbar">
            <div className="pacacamp-container">
                <Link to="/"><img className="pacacamp" src={window.pacacamp} alt="PacaCamp" /></Link>
            </div>
            
    
            <div className="guest-menu">
                {loginLink}
                {signupLink}
            </div>
        </nav> 
    );

    return currentUser ? protectedNav() : authNav();
};


export default NavBar;