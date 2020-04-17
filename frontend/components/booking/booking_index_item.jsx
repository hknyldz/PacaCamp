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
        // const total = numNights * spot.price;

        return (
                <div className="booking-item">
                    <div className="item-details">
                        <Link to={`/spots/${spot.id}`}>{spot.name}</Link> 
                        <div className="body">
                            <img onClick={() => this.props.history.push(`/spots/${spot.id}`)} src={spot.photoUrls[0]} alt="cover photo"/>
                            <ul>
                                <li><span className="bold">Check in: &nbsp;</span>{this.props.booking.checkin_date}</li>
                                <li><span className="bold">Check out:  &nbsp;</span>{this.props.booking.checkout_date}</li>
                                <li><span className="bold">Number of nights:  &nbsp;</span>{numNights}</li>
                                <li><span className="bold">Number of guests:  &nbsp;</span>{this.props.booking.num_guests}</li>
                                <li><span className="bold">Total:  &nbsp;</span>${this.props.booking.total}</li>
                            </ul>
                        </div>

                        <div className="review-delete">
                            <Link to={`/spots/${spot.id}`}>Leave a review</Link>
                            <button onClick={() => this.props.deleteBooking(this.props.booking.id)}><i className="far fa-times-circle"></i>&nbsp;Cancel booking</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(BookingIndexItem);