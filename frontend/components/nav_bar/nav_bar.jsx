import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const NavBar = ({ currentUser, logout, loginLink, signupLink, location }) => {
    let navSearchBar;
    if (location.pathname === '/' || location.pathname.includes('/users')) {
        navSearchBar = null;
    } else {
        navSearchBar = <SearchBar />
    }
    

    const protectedNav = () => (
        <nav className="navbar">
            <div className="pacacamp-search">
                <div className="pacacamp-container">
                    <Link to="/"><img className="pacacamp" src={window.pacacamp} alt="PacaCamp"/></Link>
                </div>

                {navSearchBar}
            </div>

            <div className="user-menu">
                <div className="navlinks">
                    <a id="portfolio" href="https://aimyaa.github.io/" target="_blank">
                        <i className="fas fa-user"></i>&nbsp;Portfolio
                    </a>

                    <a id="github" href="https://github.com/aimyaa" target="_blank">
                        <i className="fab fa-github"></i>&nbsp;GitHub
                    </a>

                    <a id="linkedin" href="https://www.linkedin.com/in/aimy-yu-11a5681a9/" target="_blank">
                        <i className="fab fa-linkedin"></i>&nbsp;LinkedIn
                    </a>

                    <a id="angellist" href="https://angel.co/u/aimy-yu" target="_blank">
                        <i className="fab fa-angellist"></i>&nbsp;AngelList
                    </a>
                </div>

                <div className="dropdown-container">
                    <img className="alpaca" src={window.alpaca} alt="alpaca"/>
                    
                    <ul className="dropdown-menu">
                        <li><Link to={`/users/${currentUser.id}`} className="dropdown-item">Manage account</Link></li>
                        <li className="divider"></li>
                        <li><Link to={`/users/${currentUser.id}/trips`} className="dropdown-item">Trips</Link></li>
                        <li className="divider"></li>
                        <li>
                            <span className="dropdown-item" onClick={logout}>Log out</span>
                        </li>    
                    </ul>
                </div>
            </div>
        </nav>      
    );

    const authNav = () => (
        <nav className="navbar">
            <div className="pacacamp-search">
                <div className="pacacamp-container">
                    <Link to="/"><img className="pacacamp" src={window.pacacamp} alt="PacaCamp" /></Link>
                </div>
                {navSearchBar}
            </div>

            <div className="guest-menu">
                <a id="portfolio" href="https://aimyaa.github.io/" target="_blank">
                    <i className="fas fa-user"></i>&nbsp;Portfolio
                </a>

                <a id="github" href="https://github.com/aimyaa" target="_blank">
                    <i className="fab fa-github"></i>&nbsp;GitHub
                </a>

                <a id="linkedin" href="https://www.linkedin.com/in/aimy-yu-11a5681a9/" target="_blank">
                    <i className="fab fa-linkedin"></i>&nbsp;LinkedIn
                </a>

                <a id="angellist" href="https://angel.co/u/aimy-yu" target="_blank">
                    <i className="fab fa-angellist"></i>&nbsp;AngelList
                </a>

                {loginLink}
                {signupLink}
            </div>
        </nav> 
    );

    return currentUser ? protectedNav() : authNav();
};


export default withRouter(NavBar);