export const fetchSpots = (filters) => {
    return $.ajax({
        url: '/api/spots',
        data: filters
    });
};

export const fetchSpot = (spotId) => {
    return $.ajax({
        url: `/api/spots/${spotId}`
    });
};