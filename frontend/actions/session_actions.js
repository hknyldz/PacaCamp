import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const login = (formUser) => (dispatch) => {
    return sessionAPIUtil.login(formUser).then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
    return sessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (formUser) => (dispatch) => {
    return sessionAPIUtil.signup(formUser).then((user) => dispatch(receiveCurrentUser(user)), (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
    });
};


