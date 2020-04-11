import React from 'react';

const SpotIndexItem = ({ spot }) => {
    return (
        <div className="spot-index-item">
            <div className="image-container">
                <img src="" alt=""/>
            </div>

            <div className="figure-caption">
                <div className="name-icons-location">
                    <div className="name-icons">
                        <span className="spot-name">{spot.name}</span>
                        <span className="icons">icons</span>
                    </div>

                    <div className="location">{spot.location}</div>
                </div>

                <div className="rating-reviews-price">
                    <div className="rating-reviews">
                        <span className="rating">
                            <span className="thumbs-up"></span>
                            <span className="percentage"></span>
                        </span>
                        
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
    );
}

export default SpotIndexItem;