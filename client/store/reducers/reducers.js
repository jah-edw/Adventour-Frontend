import { combineReducers } from 'redux';

const initialTourState = { id: 0, title: 'Initial Title' };
function tourReducer(state = initialTourState, action) {
  switch (action.type) {
    case 'GET_TOUR': {
      return (state = { id: action.payload.id, title: action.payload.title });
    }
    case 'SET_CURRENT_TOUR': {
      return action.payload;
    }
    default:
      return state;
  }
}

const initialBookingState = {};
function bookingReducer(state = initialBookingState, action) {
  switch (action.type) {
    case 'CREATE_BOOKING_INFO': {
      return action.payload;
    }
    default:
      return state;
  }
}

const initialGameState = {};
function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case 'GET_CLUE': {
      return action.payload;
    }
    default:
      return state;
  }
}

const initialUserState = {};
function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'LOGIN_USER': {
      if (action.payload) return action.payload
      else return state;
    }
    default:
      return state;
  }
}

const initialClueState = 2;
function clueReducer(state = initialClueState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    default:
      return state
  }
}

const initialHintState = false;
function hintReducer(state = initialHintState, action) {
  switch (action.type) {
    case 'HINT': {
      return state = action.payload
    }
    default: 
      return state
  }
}

export default combineReducers({
  tourReducer,
  bookingReducer,
  gameReducer,
  userReducer,
  clueReducer,
  hintReducer
});
