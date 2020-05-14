import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from "react-router-dom";

class SearchMap extends React.Component {
    componentDidMount() {
        this.renderMap();
    }

    handleMarkerClick(spot) {
        this.props.history.push(`/spots/${spot.id}`);
    }

    renderMap() {
        const center = { lat: 39.8283, lng: -98.5795 };

        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom: 3
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        const centerMarker = new google.maps.Marker({
            position: center
        })
        centerMarker.setMap(this.map);

        this.markerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.markerManager.updateMarkers(this.props.spots);
        console.log(this.props.spots);
    }

    render() {
        return (
            <div className="search-map" ref={map => this.mapNode = map}>
            </div>
        );
    }
}

export default withRouter(SearchMap);