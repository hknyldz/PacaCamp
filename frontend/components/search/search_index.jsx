import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchMap from './search_map';

class SearchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        return (
            <div className="search-index">
                <div className="search-index-items">
                    {this.props.spots.map((spot) =>
                        <SearchIndexItem
                            key={spot.id}
                            spot={spot}
                        />
                    )}
                </div>

                <SearchMap />
            </div>
        )
    }
}

export default SearchIndex;