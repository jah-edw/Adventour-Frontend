import {
  createBooking,
  getIndividualTour,
  getNextGameState,
  getTourInfo,
  getRegisterInfo
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

export const registerUser = (username, password, email, DOB) => {
  return (dispatch) => {
    getRegisterInfo(username, password, email, DOB).then((data) => {
      dispatch({
        type: 'REGISTER_USER',
        payload: data
      });
    });
  };
};
