import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => dispatch => userAPIUtil.fetchUsers().then((users) => dispatch(receiveAllUsers(users)));
