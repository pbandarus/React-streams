import _ from 'lodash';

export default (state={}, action) => {
    switch(action.type){
        case "FETCH_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "FETCH_STREAMS":
            return {...state, ..._.mapKeys(action.payload,"id")}; // function that is going to take in an array and return object which will give the kay as second arg
        case "EDIT_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "CREATE_STREAM":
            return {...state, [action.payload.id] : action.payload};
        case "DELETE_STREAM":
            return _.omit(state, action.payload) // from loadash, this will take care of creating a new object and deleting the record
        default:
            return state;
    }
}