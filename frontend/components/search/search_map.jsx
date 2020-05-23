import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MarkerManager from '../../util/marker_manager';

class SearchMap extends React.Component {
    componentDidMount() {
        this.renderMap();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.countryId !== this.props.countryId) {
            this.renderMap();
        }
    }

    handleMarkerClick(spot) {
        this.props.history.push(`/spots/${spot.id}`);
    }

    renderMap() {
        const center = { lat: this.props.lat, lng: this.props.lng };                                                        

        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom: 5
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // center marker
        const centerMarker = new google.maps.Marker({
            position: center
        })
        centerMarker.setMap(this.map);

        const centerMarkerWindowContent = <div className="center-info-window">Your search location</div>;

        const centerContent = ReactDOMServer.renderToString(centerMarkerWindowContent);

        const centerInfoWindow = new google.maps.InfoWindow({
            content: centerContent
        });

        centerMarker.addListener('mouseover', () => {
            centerInfoWindow.open(this.map, centerMarker);
        });

        centerMarker.addListener('mouseout', () => {
            centerInfoWindow.close();
        });

        // spot markers
        this.markerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.markerManager.updateMarkers(this.props.spots);
    }

    render() {
        return (
            <div className="search-map" ref={map => this.mapNode = map}>
            </div>
        );
    }
}

export default SearchMap;