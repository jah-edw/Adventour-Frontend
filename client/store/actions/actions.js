import {
  createBooking,
  getIndividualTour,
  getNextGameState,
  getTourInfo,
  getRegisterInfo,
  getLoginUser,
} from '../../APISERVICE/apiservice';

export const setIndividualTour = (title) => {
  return (dispatch) => {
    getIndividualTour(title).then((data) => {
      dispatch({
        type: 'SET_CURRENT_TOUR',
        payload: data
      });
    });
  };
};

export const setCreateBooking = (TourId, partySize, UserId = 1) => {
  return (dispatch) => {
    createBooking(TourId, partySize, UserId).then((data) => {
      dispatch({
        type: 'CREATE_BOOKING_INFO',
        payload: data
      });
    });
  };
};

export const getClue = (title, clueNumber) => {
  return (dispatch) => {
    getClue(title, clueNumber).then((data) => {
      dispatch({
        type: 'GET_CLUE',
        payload: data
      });
    });
  };
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    getLoginUser(username, password).then((data) => {
      dispatch({
        type: 'LOGIN_USER',
        payload: data
      });
    });
  };
};
