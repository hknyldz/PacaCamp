import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

/*
Export a container component for the `ReviewForm` that will be used to create a
new review. Map in a review object with empty values for each field as a `review` prop
along with a `formType` prop set to the string 'Create review'. Additionally, map
in a function that will dispatch the appropriate action to the store on form
submission as an `action` prop.
*/

const msp = (state) => ({
    formType: 'Submit review', 
    currentUserId: state.session.id
});

const mdp = (dispatch) => ({
    action: (review) => dispatch(createReview(review))
});

const CreateReviewFormContainer = connect(msp, mdp)(ReviewForm);

export default CreateReviewFormContainer;