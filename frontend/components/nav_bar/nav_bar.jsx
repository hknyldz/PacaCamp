import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
    const protectedNav = () => (
        <nav className="navbar">
            <div className="logo">
                <img src="" alt=""/>
            </div>

            <div className="user-menu">
                <div className="trips">
                    <a href="">Trips</a>
                </div>

                <div className="dropdown-container">
                    <img className="dropdown-icon" src="" alt=""/>
                    <div className="dropdown-menu">
                        <a href="">Manage account</a>
                        <a href="" onClick={logout}>Log out</a>    
                    </div>
                </div>
            </div>
        </nav>      
    );

    const authNav = () => (
        <nav className="navbar">
            <div className="logo">
                <img src="" alt="" />
            </div>
            
    
            <div className="guest-menu">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </nav> 
    );

    return currentUser ? protectedNav() : authNav();
};


export default NavBar;