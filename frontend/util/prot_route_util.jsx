import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Prot = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

const ProtRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Prot)
);

export default ProtRoute;