import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = '', action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, { modal: action.modal, reviewId: action.reviewId})
        case CLOSE_MODAL:
            return '';
        default:
            return state;
    }
};

export default modalReducer;