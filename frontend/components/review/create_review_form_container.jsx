import { connect } from 'react-redux';
import CreateReviewForm from './create_review_form';
import { createReview, clearErrors } from '../../actions/review_actions';

const msp = (state) => ({
    formType: 'WRITE A REVIEW', 
    currentUserId: state.session.id,
    errors: state.errors.review
});

const mdp = (dispatch) => ({
    action: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors()),
});

const CreateReviewFormContainer = connect(msp, mdp)(CreateReviewForm);

export default CreateReviewFormContainer;