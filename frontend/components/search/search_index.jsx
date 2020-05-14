import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchMap from './search_map';

class SearchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        if (!this.props.spots.length) return null; 

        const filteredSpots = this.props.spots.filter( spot => spot.country === 'United States');

        return (
            <div className="search-index">
                <div className="search-index-items">
                    {filteredSpots.map((spot) =>
                        <SearchIndexItem
                            key={spot.id}
                            spot={spot}
                        />
                    )}
                </div>

                <SearchMap spots={this.props.spots}/>
            </div>
        )
    }
}

export default SearchIndex;