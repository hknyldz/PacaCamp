import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = (
                <div className="login-modal" onClick={e => e.stopPropagation()}>
                    <LoginFormContainer />
                </div>
            );
            break;
        case 'signup':
            component = (
                <div className="signup-modal" onClick={e => e.stopPropagation()}>
                    <SignupFormContainer />
                </div>
            );
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            {component}
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
