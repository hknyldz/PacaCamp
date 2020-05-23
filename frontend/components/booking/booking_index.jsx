import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBookings(this.props.currentUser.id);
        window.scrollTo(0, 0);
    }

    render() {
        if (this.props.currentUser.id !== parseInt(this.props.userId)) return null;

        let numTrips;
        if (this.props.bookings.length === 1) {
            numTrips = <div className="num-trips">
                            <span>1 Trip</span>
                        </div> 
        } else if (this.props.bookings.length === 0) { 
            numTrips = <div className="num-trips">
                            <span>0 Trips</span>
                            <p className="no-trips">No past trips. Let's get you outside!</p>
                        </div> 
        } else {
            numTrips = <div className="num-trips">
                            <span>{`${this.props.bookings.length} Trips`}</span>
                        </div>
        }

        const dateOptions = { month: "long", year: "numeric" };
        const date = new Date(this.props.currentUser.created_at).toLocaleDateString("en-US", dateOptions); 

        return (
            <div className="user-booking-index">
                <div className="user">
                    <div className="top">
                        <div className="avatar-name-details">
                            <img src={window.avatar} alt="avatar"/>
                            <div className="name-details">
                                <div>
                                    <div className="name">{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name[0]}.`}</div>
                                    <div>
                                        <i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i>
                                        &nbsp;
                                        <span className="host">Host</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-since">
                            <div>
                                <i className="fas fa-heart"></i>
                                &nbsp;&nbsp;
                                <span>PacaCamper since {date}</span> 
                            </div>

                            <Link to={`/users/${this.props.currentUser.id}`}>Edit profile</Link>
                        </div>
                    </div>

                    <div className="bottom">
                        <h3>Trusted PacaCamper</h3>
                        <p>
                            <i className="far fa-check-circle"></i>
                            &nbsp;
                            <span className="email">Email address</span>
                            </p>
                    </div>
                </div>

                <div className="booking-index">
                    {numTrips}
                    <ul className="booking-items">
                        {this.props.bookings.map((booking) => 
                        <BookingIndexItem
                            key={booking.id}
                            booking={booking}
                            fetchSpot={this.props.fetchSpot}
                            spots={this.props.spots}
                            deleteBooking={this.props.deleteBooking}
                            />
                        )}
                    </ul>

                </div>
            </div>
        )
    }

}

export default BookingIndex;