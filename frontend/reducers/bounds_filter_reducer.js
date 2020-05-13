import { RECEIVE_BOUNDS } from "../actions/bounds_filter_actions";

const initialState = {
    bounds: {},
};

const boundsFilterReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOUNDS:
            return Object.assign({}, state, { [action.filter]: action.bounds })
        default:
            return state;
    }
};

export default boundsFilterReducer;