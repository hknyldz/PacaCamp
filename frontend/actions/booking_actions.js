import * as bookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_BOOKING_ERRORS
});

export const fetchBookings = (userId) => dispatch => bookingAPIUtil.fetchBookings(userId).then((bookings) => dispatch(receiveBookings(bookings)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const createBooking = (booking) => dispatch => bookingAPIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const deleteBooking = (bookingId) => dispatch => bookingAPIUtil.deleteBooking(bookingId).then((booking) => dispatch(removeBooking(booking.id)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

