import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => ({
    reviews: Object.values(state.entities.reviews),
    users: state.entities.users,
    currentUserId: state.session.id
});

const mdp = (dispatch) => ({
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    openModal: (modal, reviewId) => dispatch(openModal(modal, reviewId))
});


const ReviewIndexContainer = connect(msp, mdp)(ReviewIndex);

export default ReviewIndexContainer;