import { SET_JOBS } from "../actions/fetch";

const jobsInitialState = {
    results: [],
};

const jobsReducer = (state = jobsInitialState, action) => {
    switch (action.type) {
        case SET_JOBS:
        return {
            ...state,
            results: action.payload,
        };
        default:
        return state;
    }
};

export default jobsReducer;