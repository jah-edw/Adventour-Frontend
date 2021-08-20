import { getIndividualTour } from "../../APISERVICE/apiservice";

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
