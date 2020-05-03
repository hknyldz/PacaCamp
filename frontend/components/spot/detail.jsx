import React from 'react';

const Detail = (props) => {
    
    const { 
        checkin_time, 
        checkout_time, 
        cancellation_policy, 
        on_arrival, 
        min_nights 
    } = props.detail;

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
                    <li><span>On arrival:&nbsp;</span>{on_arrival}</li>
                    <li><span>Minimum nights:&nbsp;</span>{min_nights}</li>
                </ul>
            </div>
        </section>
    )
};

export default Detail;