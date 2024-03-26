import { SAVE_AVAILABLE_JOBS, TURN_OFF_SPINNER } from "../actions";

const initialState = {
    available: [],
    isLoading: true,
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_AVAILABLE_JOBS:
        return {
            ...state,
            available: action.payload,
        };

        case TURN_OFF_SPINNER:
        return {
            ...state,
            isLoading: false,
        };

        default:
        return state;
    }
};

export default jobReducer;