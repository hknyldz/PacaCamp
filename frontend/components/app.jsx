import React from "react";
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <h1>PacaCamp</h1>
        <NavBarContainer />
        <AuthRoute exact path='/signup' component={SignupFormContainer}></AuthRoute>
        <AuthRoute exact path='/login' component={LoginFormContainer}></AuthRoute>
    </div>
);

export default App;