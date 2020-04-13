import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    signup: (formUser) => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()) 
});

export default connect(msp, mdp)(SignupForm);