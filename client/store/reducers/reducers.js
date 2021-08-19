import { combineReducers } from 'redux';

const initialTourTitle = ''
function tourReducer(state = initialTourTitle, action) {
    switch (action.type) {
        case "GET_TOUR": {
            return state = action.payload
        }
        default:
            return state;
    }
}



export default combineReducers({ tourReducer })