import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import boundsFilterReducer from './bounds_filter_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    boundsFilter: boundsFilterReducer,
});

export default uiReducer;