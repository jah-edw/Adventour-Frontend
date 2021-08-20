import { combineReducers } from 'redux';

const initialTourState = { id: 0, title: 'Initial Title' }
function tourReducer(state = initialTourState, action) {
    switch (action.type) {
        case "GET_TOUR": {
            return state = { id: action.payload.id, title: action.payload.title }
        }
        case "SET_CURRENT_TOUR": {
            return action.payload
        }
        default:
            return state;
    }
}






export default combineReducers({ tourReducer })