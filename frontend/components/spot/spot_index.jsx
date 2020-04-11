import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        return (
            <div className="spot-index">
                {this.props.spots.map((spot) => 
                    <SpotIndexItem 
                    key={spot.id}
                    spot={spot}
                    />
                )}
            </div>
        )

    }
}

export default SpotIndex;