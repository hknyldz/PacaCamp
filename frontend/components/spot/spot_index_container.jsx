import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SpotIndex from './spot_index';


const msp = state => ({
    spots: state.entities.spots
});

const mdp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
});

const SpotIndexContainer = connect(msp, mdp)(SpotIndex);

export default SpotIndexContainer;