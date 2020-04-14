import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';

/*
Export a container component for the `ReviewIndex` that maps an array of all reviews
from the store as a `reviews` prop. Additionally, it should map in functions that
will dispatch `fetchReviews` and `deleteReview` to the store as props of the same
name.
*/

const msp = (state) => ({
    reviews: Object.values(state.entities.reviews),
    users: state.entities.users,
    currentUserId: state.session.id
});

const mdp = (dispatch) => ({
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    // updateReview: (review) => dispatch(updateReview(review))
});


const ReviewIndexContainer = connect(msp, mdp)(ReviewIndex);

export default ReviewIndexContainer;