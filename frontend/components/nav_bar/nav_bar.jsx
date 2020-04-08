import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const protectedNav = () => (
        <nav className="navbar">
            <div className="pacacamp">
                <Link to="/">PacaCamp</Link>
            </div>

            <div className="user-menu">
                <div className="trips">
                    <a href="">Trips</a>
                </div>

                <div className="dropdown-container">
                    <img src={window.logo} alt="logo"/>
                    
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="">Manage account</a></li>
                        <li className="divider"></li>
                        <li><button 
                        className="dropdown-item" onClick={logout}>Log out</button></li>    
                    </ul>
                </div>
            </div>
        </nav>      
    );

    const authNav = () => (
        <nav className="navbar">
            <div className="pacacamp">
                <Link to="/">PacaCamp</Link>
            </div>
            
    
            <div className="guest-menu">
                <Link id="login-link" to="/login">Log in</Link>
                <Link id="signup-link" to="/signup">Sign up</Link>
            </div>
        </nav> 
    );

    return currentUser ? protectedNav() : authNav();
};


export default NavBar;