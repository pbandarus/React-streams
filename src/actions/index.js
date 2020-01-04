import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
    return{
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: 'SIGN_OUT'
    }
}

export const createStream = formValues => async (dispatch,getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});

    dispatch({type : 'CREATE_STREAM', payload : response.data});
    // get the user back to root route .. programmatic navigation
    // normal operation with browser operator
    //Internally browser router creates a history object, then anytime a browser render renders a component like page1 component,
    // brouserRouter passes that history obj as a prop to your component, so this component can trigger navigation from component

    // here if we have do routing from action creator, it's hard to get access to history object
    // To avoid this , we will create a history obj inside a dedicated file inside our proj, when ever needed we import it.
    // which means, we are not allowing browserrouter to create history object

    // we use push to programatically navigate
    history.push('/');
}

// when ever we are returning a function from action creator, the function gets called automatically by redux thunk with 2 args
// dispatch and getState

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({type: 'FETCH_STREAMS', payload: response.data});
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: 'FETCH_STREAM', payload: response.data});
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({type: 'EDIT_STREAM', payload: response.data});
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({type : 'DELETE_STREAM', payload: id});
}
