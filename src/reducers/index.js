import {combineReducers} from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth : authReducer,
    form : formReducer,
    streams : streamReducer
});


// reduc form will create a reducer and gives to us
// key neame is specific or predefined to form for redux form reducer