export const fetchBookings = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/bookings`
    })
);

export const createBooking = (booking) => (
    $.ajax({
        method: 'POST',
        url: '/api/bookings',
        data: { booking }
    })
);

export const deleteBooking = (bookingId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/bookings/${bookingId}`
    })
);