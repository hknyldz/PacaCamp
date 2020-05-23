import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SearchIndex from './search_index';

const msp = (state, ownProps) => ({
    spots: Object.values(state.entities.spots),
    countryId: ownProps.match.params.countryId
});

const mdp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
});

const SearchIndexContainer = connect(msp, mdp)(SearchIndex);

export default SearchIndexContainer;