import React from 'react';
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            dropdown: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick() {
        this.setState({
            dropdown: true
        });
    }

    handleInput(e) {
        this.setState({
            query: e.currentTarget.value
        });
    }

    renderResults() {
        if (!this.state.dropdown) return null; 

        const countries = [
            ['Chile', 1],
            ['China', 2],
            ['Guatemala', 3],
            ['Iceland', 4],
            ['Mongolia', 5],
            ['New Zealand', 6],
            ['South Korea', 7],
            ['United States', 8]
        ];

        const results = [];
        const query = this.state.query.trim().toLowerCase();

        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            const slice = country[0].slice(0, query.length).toLowerCase();
            if (slice === query) {
                results.push({ name: country[0], id: country[1] });
            }

            if (results.length === 6) return results;
        }

        return results;
    }

    mapResultsToLi() {
        if (!this.state.dropdown) return null;

        const results = this.renderResults();

        let listItems;
        if (results.length) {
            listItems = results.map(country => 
                <li 
                className="search-result"
                key={country.id} 
                onClick={() => this.props.history.push(`/discover/${country.id}`)}
                >   
                    <div className="i-container">
                        <i className="fas fa-map-marker-alt"></i>
                        &nbsp;&nbsp;&nbsp;
                    </div>

                    <div className="country">{country.name}</div>
                </li>
            );
        } else {
            listItems = null;
        }

        return listItems;
    }

    render() {
        let searchBar; 
        if (this.props.location.pathname === '/') {
            searchBar = (
                <div className="splash-search">
                    <div className="bar-container">
                        <div className="splash-search-bar">
                            &nbsp;&nbsp;&nbsp;
                            <i className="fas fa-search"></i>
                            &nbsp;&nbsp;
                            <input 
                            type="search" 
                            value={this.state.query}
                            placeholder="Try United States, South Korea..."
                            onClick={this.handleClick}
                            onChange={this.handleInput} 
                            />
                        </div>

                        <ul id="search-results">
                            {/* <li>hi</li>
                            <li>bi</li> */}
                            {this.mapResultsToLi()}
                        </ul>
                    </div>

                    <Link to={'/discover/8'}>Search</Link>
                </div>
            )
        } 
        else {
            searchBar = (
                <div className="navbar-search">
                    <div className="bar-container">
                        <div className="navbar-search-bar">
                            &nbsp;&nbsp;
                            <i className="fas fa-search"></i>
                            &nbsp;&nbsp;
                            <input 
                            type="search" 
                            value={this.state.query}
                            placeholder="Try United States, South Korea..."
                            onClick={this.handleClick}
                            onChange={this.handleInput} 
                            />
                        </div>

                        <ul id="search-results">
                            {/* <li>hi</li>
                            <li>bi</li> */}
                            {this.mapResultsToLi()}
                        </ul>
                    </div>
                </div>
            )   
        }

        return searchBar;
    }
}

export default withRouter(SearchBar);