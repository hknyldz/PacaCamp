import { connect } from 'react-redux';
import EditReviewForm from './edit_review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/review_actions';
/*
Export a container component for the `EditReviewForm` component given below that
will be used to edit an existing review. The `EditReviewForm` component should fetch
the review being edited when it successfully mounts to the DOM and will only
render the `ReviewForm` once it has received that Review.

In the container, pass in the review being edited as a `review` prop along with a
`formType` prop set to the string 'Update review'. The edit form should pre-fill
each field with the review's values. Additionally, map in a function that will
dispatch `fetchReview` as a prop of the same name, and one that will dispatch the
appropriate action to the store on form submission as an `action` prop.

**Do NOT modify the `render` function provided for the `EditReviewForm`.**
*/

const msp = (state) => ({
    review: state.entities.reviews[state.ui.modal.reviewId],
    formType: 'EDIT REVIEW', 
    currentUserId: state.session.id,
    errors: state.errors.review
});

const mdp = (dispatch) => ({
    action: (review) => dispatch(updateReview(review)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
});

const EditReviewFormContainer = connect(msp, mdp)(EditReviewForm);

export default EditReviewFormContainer;