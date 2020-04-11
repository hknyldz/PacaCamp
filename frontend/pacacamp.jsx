import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './util/session_api_util'; //TESTING
import { fetchSpots, fetchSpot } from './actions/spot_actions'; //TESTING

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TESTING
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchSpots = fetchSpots;
    window.fetchSpot = fetchSpot;
    //TESTING
    
    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, rootEl);
});