import * as spotAPIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
});

const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot
});

export const fetchSpots = (filters) => dispatch => spotAPIUtil.fetchSpots(filters).then((spots) => dispatch(receiveSpots(spots)));

export const fetchSpot = (spotId) => dispatch => spotAPIUtil.fetchSpot(spotId).then((spot) => dispatch(receiveSpot(spot)));

