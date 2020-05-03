import React from 'react';

class SpotMap extends React.Component {
    componentDidMount() {

        const center = { lat: this.props.spot.latitude, lng: this.props.spot.longitude };

        const mapOptions = {
            center, 
            mapTypeId: 'terrain',
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        const circle = new google.maps.Circle({
            strokeColor: '#4ff7c5',
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#71DBB4',
            fillOpacity: 0.25,
            radius: 980,
            map: this.map,
            center   
        })
    }

    render() {
        return (
            <div className="map-container">
                <div className="spot-map" ref={map => this.mapNode = map}>
                </div>

                <div className="tile-container">
                    <div className="container">
                        <div className="tile">
                            <dl class="dl-horizontal">
                                <dt>Property</dt>
                                <dd>{this.props.spot.name}</dd>
                                <dt>Location</dt>
                                <dd>{this.props.spot.location}</dd>
                                <dt>Country</dt>
                                <dd>{this.props.spot.country}</dd>
                            </dl>

                            <dl class="dl-horizontal">
                                <dt>${this.props.spot.price}/night</dt>
                                <dd>{this.props.spot.area.num_sites} Site(s)</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        

}


export default SpotMap;