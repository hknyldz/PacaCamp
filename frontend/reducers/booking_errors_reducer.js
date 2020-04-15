import { RECEIVE_BOOKING_ERRORS, CLEAR_BOOKING_ERRORS, RECEIVE_BOOKING } from '../actions/booking_actions';


const bookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return action.errors;
        case RECEIVE_BOOKING:
            return [];
        case CLEAR_BOOKING_ERRORS:
            return [];
        default:
            return state;
    }
};

export default bookingErrorsReducer; 