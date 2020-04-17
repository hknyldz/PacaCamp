import { connect } from 'react-redux';
import { updateUser, clearErrors } from '../../actions/user_actions';
import UserForm from './user_form';


const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId,
    errors: state.errors.user
})

const mdp = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user)),
    clearErrors: () => dispatch(clearErrors())
})

const EditUserFormContainer = connect(msp, mdp)(UserForm);

export default EditUserFormContainer;