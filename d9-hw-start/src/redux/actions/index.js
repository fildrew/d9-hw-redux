export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const SAVE_AVAILABLE_JOBS = "SAVE_AVAILABLE_JOBS";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";

export const removeFromFavourite = (fav) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: fav,
    };
};

export const addToFavourite = (name) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: name,
    };
};

export const getJobsActionCreator = () => {
    return async (dispatch, getState) => {
        console.log(getState());

        try {
        let resp = await fetch(
            "https://strive-benchmark.herokuapp.com/api/jobs?company="
        );
        if (resp.ok) {
            let fetchedJobs = await resp.json();
            dispatch({
            type: SAVE_AVAILABLE_JOBS,
            payload: fetchedJobs,
            });
        } else {
            console.log("error");
        }
        } catch (error) {
        console.log(error);
        } finally {
        dispatch({
            type: TURN_OFF_SPINNER,
        });
        }
    };
};