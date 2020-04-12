import React from 'react';
import { withRouter } from "react-router-dom";

const SpotIndexItem = ({ spot, history }) => {
    let lodge_mode; 
    if (spot.area.lodging_provided) {
        lodge_mode = <span><img src={window.lodging} alt="lodge"/></span>
    } else {
        lodge_mode = <span><img src={window.tent} alt="tent"/><img src={window.rv} alt="rv"/></span>
    }
    return (
        <div className="spot-index-item" onClick={(e) => {
            e.stopPropagation();
            history.push(`/spots/${spot.id}`);
        }}>
            <div className="frame">
                <div className="image-container">
                    <img src={window.index_demo} alt=""/>
                </div>

                <div className="figure-caption">
                    <div className="name-icons-location">
                        <div className="name-icons">
                            <div className="name-check">
                                <span className="spot-name">{spot.name}</span>
                                &nbsp;
                                <span className="check"><i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i></span>
                            </div>
                            <div className="icons">{lodge_mode}</div>
                        </div>

                        <div className="location">{spot.location}</div>
                    </div>

                    <div className="rating-reviews-price">
                        <div className="rating-reviews">
                            <span className="rating">
                                <span><i id="thumbs-up-icon" className="fas fa-thumbs-up" aria-hidden="true"></i></span>
                                &nbsp;
                                <span className="percentage">{spot.rating}%</span>
                            </span>
                            &nbsp;
                            <span className="reviews">
                                —  num_review
                            </span>
                        </div>

                        <div className="price-container">
                            <span className="price">${spot.price}/night</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SpotIndexItem);