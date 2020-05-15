import React from 'react';
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component { 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/search');
    }

    render() {
        let searchBar; 
        if (this.props.location.pathname === '/') {
            searchBar = (
                <div className="splash-search">
                    <form onSubmit={this.handleSubmit}>
                        &nbsp;&nbsp;&nbsp;
                        <i className="fas fa-search"></i>
                        &nbsp;&nbsp;
                        <input 
                        type="search" 
                        placeholder="Try United States..."
                        />
                    </form>

                    <Link to={'/search'}>Search</Link>
                </div>
            )
        } 
        else {
            searchBar = (
                <form className="navbar-search" onSubmit={this.handleSubmit}>
                    &nbsp;&nbsp;
                    <i className="fas fa-search"></i>
                    &nbsp;&nbsp;
                    <input 
                    type="search" 
                    placeholder="Try United States..."
                    />
                </form>
            )   
        }

        return searchBar;
    }
}

export default withRouter(SearchBar);