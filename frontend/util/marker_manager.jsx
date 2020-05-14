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
                    <img src={spot.photoUrls[1]} alt="cover photo" />
                </div>

                <div className="spot-details">   
                    <div className="name">
                        <span className="spot-name">{spot.name}</span>
                        &nbsp;
                        <span className="check"><i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i></span>
                    </div>
                    
                    <div className="location">
                        in {spot.country} &nbsp; <span className="arrow"><i className="fas fa-angle-right"></i></span> &nbsp; {spot.location}
                    </div>

                    
                    <div className="rating-reviews">
                        <span className="rating">
                            <span className="thumb"><i id="thumbs-up-icon" className="fas fa-thumbs-up" aria-hidden="true"></i></span>
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

        const icon = new google.maps.MarkerImage(
            'https://s3.amazonaws.com/pacacamp-seeds/marker.png',
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(50, 50)
        );

        const hoverIcon = new google.maps.MarkerImage(
            'https://s3.amazonaws.com/pacacamp-seeds/hovermarker.png',
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(50, 50)
        );

        const marker = new google.maps.Marker({
            position,
            icon, 
            map: this.map,
            spotId: spot.id,
            title: spot.name
        });

        this.markers[spot.id] = marker;
        
        marker.addListener('click', () => this.handleClick(spot));

        marker.addListener('mouseover', () => {
            marker.setIcon(hoverIcon);
            infoWindow.open(this.map, marker);
        });

        marker.addListener('mouseout', () => {
            marker.setIcon(icon);
            infoWindow.close();
        });
    }
}

export default MarkerManager;