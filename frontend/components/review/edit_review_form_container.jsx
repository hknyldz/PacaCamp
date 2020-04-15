import { connect } from 'react-redux';
import EditReviewForm from './edit_review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/review_actions';


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