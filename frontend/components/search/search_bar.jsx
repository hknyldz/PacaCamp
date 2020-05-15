import React from 'react';
import { withRouter } from "react-router-dom";

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
                <form className="splash-search" onSubmit={this.handleSubmit}>
                    &nbsp;&nbsp;
                    <i className="fas fa-search"></i>
                    &nbsp;&nbsp;
                    <input 
                    type="search" 
                    placeholder="Try United States"
                    />
                </form>
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
                    placeholder="Try United States"
                    />
                </form>
            )   
        }

        return searchBar;
    }
}

export default withRouter(SearchBar);