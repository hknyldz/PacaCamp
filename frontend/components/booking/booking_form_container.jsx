import { connect } from 'react-redux';
import { createBooking, clearErrors } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const msp = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    currentUserId: state.session.id,
    errors: state.errors.booking
});

const mdp = (dispatch) => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    clearErrors: () => dispatch(clearErrors()),
})

const BookingFormContainer = connect(msp, mdp)(BookingForm);

export default BookingFormContainer;