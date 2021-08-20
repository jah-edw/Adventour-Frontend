import { getIndividualTour, getTourInfo } from "../../APISERVICE/apiservice";

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