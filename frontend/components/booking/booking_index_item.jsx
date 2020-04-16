import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    componentDidMount() {
        this.props.fetchSpot(this.props.booking.spot_id)
    }

    render() {
        if (!this.props.spots[this.props.booking.spot_id]) return null;

        const spot = this.props.spots[this.props.booking.spot_id]
        const numNights = Math.ceil((Date.parse(this.props.booking.checkout_date) - Date.parse(this.props.booking.checkin_date)) / (1000 * 60 * 60 * 24));
        const total = numNights * spot.price;

        return (
                <div className="booking-item">
                    <div className="item-details">
                        <Link to={`/spots/${spot.id}`}>{spot.name}</Link> 
                        <div>
                            <img onClick={() => this.props.history.push(`/spots/${spot.id}`)} src={spot.photoUrls[0]} alt="cover photo"/>
                            <ul>
                                <li><span>Check in:</span>{this.props.booking.checkin_date}</li>
                                <li><span>Check out:</span>{this.props.booking.checkout_date}</li>
                                <li><span>Number of nights:</span>{numNights}</li>
                                <li><span>Number of guests:</span>{this.props.booking.num_guests}</li>
                                <li><span>Total:</span>${total}</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                    <button onClick={() => this.props.deleteBooking(this.props.booking.id)}><i className="far fa-trash-alt"></i>&nbsp;Delete</button>
                    </div>
                </div>
        )
    }
}

export default withRouter(BookingIndexItem);