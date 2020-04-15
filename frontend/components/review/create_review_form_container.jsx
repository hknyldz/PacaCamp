import { connect } from 'react-redux';
import CreateReviewForm from './create_review_form';
import { createReview, clearErrors } from '../../actions/review_actions';
/*
Export a container component for the `ReviewForm` that will be used to create a
new review. Map in a review object with empty values for each field as a `review` prop
along with a `formType` prop set to the string 'Create review'. Additionally, map
in a function that will dispatch the appropriate action to the store on form
submission as an `action` prop.
*/

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