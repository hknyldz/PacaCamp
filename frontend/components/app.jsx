import React from "react";
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import AuthRoute from '../util/route_util';
import { Route, Switch } from "react-router";
import Splash from './splash';
import SpotShowContainer from './spot/spot_show_container';
import Footer from "./footer";

const App = () => (
    <div>
        <NavBarContainer />
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/spots/:spotId' component={SpotShowContainer}></Route>
        <AuthRoute exact path='/signup' component={SignupFormContainer}></AuthRoute>
        <AuthRoute exact path='/login' component={LoginFormContainer}></AuthRoute>
        <Footer />
    </div>
);

export default App;