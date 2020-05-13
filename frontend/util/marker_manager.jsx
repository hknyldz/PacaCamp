import React from 'react';
import ReactDOMServer from 'react-dom/server';

class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {}; 
    }

    updateMarkers(spots) {
        spots.forEach( spot => {
            if (!this.markers[spot.id]) this.createMarker(spot);
        });
    }

    createMarker(spot) {
        let numReview;
        if (spot.review_ids.length < 1) {
            numReview = null;
        } else if (spot.review_ids.length === 1) {
            numReview = ' — 1 Review';
        } else {
            numReview = ` — ${spot.review_ids.length} Reviews`
        } 

        const infoWindowContent = (
            <div className="info-window">
                <div className="image-container">
                    <img src={spot.photoUrls[0]} alt="cover photo" />
                </div>

                <div className="spot-details">   
                    <div className="name">
                        <span className="spot-name">{spot.name}</span>
                        &nbsp;
                        <span className="check"><i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i></span>
                    </div>
                    
                    <div className="location">
                        in {this.props.spot.country} &nbsp; <span className="arrow"><i className="fas fa-angle-right"></i></span> &nbsp; {this.props.spot.location}
                    </div>

                    
                    <div className="rating-reviews">
                        <span className="rating">
                            <span><i id="thumbs-up-icon" className="fas fa-thumbs-up" aria-hidden="true"></i></span>
                            &nbsp;
                            <span className="percentage">{spot.rating}%</span>
                        </span>
                        &nbsp;
                        <span className="reviews">
                            {numReview}
                        </span>
                    </div>
                </div>
            </div>
        );

        const content = ReactDOMServer.renderToString(infoWindowContent);
        const infoWindow = new google.maps.InfoWindow({
            content
        });

        const position = new google.maps.LatLng(spot.latitude, spot.longitude);
        const icon = { 
            url: 'https://s3.amazonaws.com/pacacamp-seeds/marker.png', 
            size: new google.maps.Size(50, 50) // may not need  this
        };

        const marker = new google.maps.Marker({
            position,
            icon, 
            map: this.map,
            spotId: spot.id,
            title: spot.name
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[spot.id] = marker;

        marker.addListener('mouseover', () => {
            infoWindow.open(this.map, marker);
        });

        marker.addListener('mouseout', () => {
            infoWindow.close();
        });
    }
}

export default MarkerManager;