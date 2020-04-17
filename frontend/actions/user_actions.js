import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_USER_ERRORS
});

export const fetchUsers = () => dispatch => userAPIUtil.fetchUsers().then((users) => dispatch(receiveAllUsers(users)));

export const updateUser = (user) => dispatch => userAPIUtil.updateUser(user).then((user) => dispatch(receiveUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
