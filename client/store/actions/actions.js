import { createBooking, getIndividualTour, getTourInfo } from "../../APISERVICE/apiservice";

export const setIndividualTour = (title) => {
    return (dispatch) => {
        getIndividualTour(title).then((data) => {
            dispatch({
                type: 'SET_CURRENT_TOUR',
                payload: data
            })
        });
    };
};


export const setCreateBooking = (TourId, partySize, UserId = 1) => {
    return (dispatch) => {
        createBooking(TourId, partySize, UserId).then((data) => {
            dispatch({
                type: "CREATE_BOOKING_INFO",
                payload: data
            })
        })
    }
}


// export const setTourInfo = (id) => {
//     return (dispatch) => {
//         getTourInfo(id).then((data) => {
//             dispatch({
//                 type: "SET_TOUR_INFO",
//                 payload: data
//             })
//         });
//     };
// };