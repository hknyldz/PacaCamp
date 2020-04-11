export const fetchSpots = () => {
    return $.ajax({
        url: '/api/spots'
    });
};

export const fetchSpot = (spotId) => {
    return $.ajax({
        url: `/api/spots/${spotId}`
    });
};