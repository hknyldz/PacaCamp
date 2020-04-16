import { connect } from 'react-redux';
import { createBooking, clearErrors } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';

const msp = (state) => ({
    spots: state.entities.spots,
    currentUserId: state.session.id,
    errors: state.errors.booking
});

const mdp = (dispatch) => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal) => dispatch(openModal(modal))
})

const BookingFormContainer = connect(msp, mdp)(BookingForm);

export default BookingFormContainer;