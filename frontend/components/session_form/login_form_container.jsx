import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = (state) => ({
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    login: (formUser) => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()) // function to clear session errors
});

export default connect(msp, mdp)(LoginForm);