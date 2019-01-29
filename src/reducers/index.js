import {combineReducers} from 'redux';
import dashReducer from './dashReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    dash: dashReducer,
    history: historyReducer
});