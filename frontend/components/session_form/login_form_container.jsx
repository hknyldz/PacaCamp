import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';


const msp = (state) => ({
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    login: (formUser) => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(LoginForm);