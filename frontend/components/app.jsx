import React from "react";
import { Route, Switch } from "react-router";
import ProtRoute from '../util/prot_route_util';
import AuthRoute from '../util/auth_route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal';
import Splash from './splash';
import BookingIndexContainer from './booking/booking_index_container';
import EditUserFormContainer from './user/edit_user_form_container';
import SpotShowContainer from './spot/spot_show_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Footer from "./footer";

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <ProtRoute exact path='/users/:userId/trips' component={BookingIndexContainer}></ProtRoute>
        <ProtRoute exact path='/users/:userId' component={EditUserFormContainer}></ProtRoute>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/spots/:spotId' component={SpotShowContainer}></Route>
        <AuthRoute exact path='/signup' component={SignupFormContainer}></AuthRoute>
        <AuthRoute exact path='/login' component={LoginFormContainer}></AuthRoute>
        <Footer />
    </div>
);

export default App;