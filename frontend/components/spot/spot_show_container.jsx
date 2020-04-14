import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchReviews } from '../../actions/review_actions';
import SpotShow from './spot_show';

const msp = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    users: state.entities.users,
    reviews: state.entities.reviews
});

const mdp = dispatch => ({
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId))
});

export default connect(msp, mdp)(SpotShow);


