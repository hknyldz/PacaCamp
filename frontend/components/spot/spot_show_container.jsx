import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchUsers } from '../../actions/user_actions';
import SpotShow from './spot_show';


const msp = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    users: state.entities.users
});

const mdp = dispatch => ({
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(SpotShow);


