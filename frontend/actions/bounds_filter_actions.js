import { fetchSpots } from './spot_actions';

export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';
export const RESET_BOUNDS = 'RESET_BOUNDS';

const receiveBounds = (filter, bounds) => ({
    type: RECEIVE_BOUNDS,
    filter,
    bounds
});

export const resetBounds = () => ({
    type: RESET_BOUNDS
});

export const updateBounds = (filter, bounds) => (dispatch, getState) => {
    dispatch(receiveBounds(filter, bounds));
    return fetchSpots(getState().ui.boundsFilter)(dispatch);
};