import React from 'react';

const Detail = ({ checkin_time, checkout_time, cancellation_policy, on_arrival, min_nights }) => {
    
    return (
        <section className="details">
            <div className="heading">Details</div>

            <div className="content">
                <ul className="left">
                    <li><span>Check in:</span> &nbsp;{checkin_time}</li>
                    <li><span>Check out:</span> &nbsp;{checkout_time}</li>
                    <li><span>Cancellation policy:</span> &nbsp;{cancellation_policy}</li>  
                </ul>
                    
                <ul className="right">
                    <li><span>On arrival:&nbsp;{on_arrival}</span></li>
                    <li><span>Minimum nights:&nbsp;{min_nights}</span></li>
                </ul>
            </div>
        </section>
    )
};

export default Detail;