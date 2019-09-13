import {createStore} from "redux";

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    image: "",
    monthlyMortgage: 0,
    desiredRent: 0
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const CLEAR_INPUT = "CLEAR_INPUT";

function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case STEP_ONE:
            return {
                ...state,
                name: payload,
                address: payload,
                city: payload,
                state: payload,
                zip: payload,
            }
        case STEP_TWO:
            return {
                ...state,
                image: payload
            }
            // case STEP_THREE:
            //     return {
            //         ...state,
            //         monthlyMortgage: payload,
            //         desiredRent: payload
            //     }
            case CLEAR_INPUT:
                return {
                    name: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: 0,
                    image: "",
                    monthlyMortgage: 0,
                    desiredRent: 0
                }
        default:
            return state
    }
};

export default createStore(reducer);