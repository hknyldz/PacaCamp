import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBookings(this.props.currentUser.id)
    }

    render() {
        if (this.props.currentUser.id !== parseInt(this.props.userId)) return null;

        let numTrips;
        if (this.props.bookings.length === 1) {
            numTrips = <div>
                            <h2>1 Trip</h2>
                        </div> 
        } else if (this.props.bookings.length === 0) { 
            numTrips = <div>
                            <h2>0 Trips</h2>
                            <p>No past trips. Let's get you outside!</p>
                        </div> 
        } else {
            numTrips = <div>
                            <h2>{`${this.props.bookings.length} Trips`}</h2>
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
                                    <span>{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name[0]}.`}</span>
                                    <span>
                                        <i id="check-icon" className="fas fa-check-circle fa-xs" aria-hidden="true"></i>
                                        &nbsp;
                                        <span className="host">Host</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="member-since">
                            <div>
                                <span className="heart">❤️</span>
                                        PacaCamper since {date}
                            </div>

                            <Link to={`/users/${this.props.currentUser.id}`}>Edit profile</Link>
                        </div>
                    </div>

                    <div className="bottom">
                        <h3>Trusted PacaCamper</h3>
                        <p><i className="far fa-check-circle"></i>&nbsp;Email address</p>
                    </div>
                </div>

                <div className="booking-index">
                    {numTrips}
                    <ul>
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