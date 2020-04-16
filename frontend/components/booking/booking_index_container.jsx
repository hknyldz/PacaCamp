import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions';
import BookingIndex from './booking_index';

 
const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId,
    bookings: Object.values(state.entities.bookings),
    spots: state.entities.spots
});

const mdp = (dispatch) => ({
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
});

const BookingIndexContainer = connect(msp, mdp)(BookingIndex);

export default BookingIndexContainer;
