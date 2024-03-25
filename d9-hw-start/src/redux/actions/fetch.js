export const SET_JOBS = "SET_JOBS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const fetchJobs = (query) => {
    return async (dispatch) => {
        try {
        const response = await fetch(baseEndpoint + query + "&limit=20");
        if (response.ok) {
            const { data } = await response.json();
            dispatch({ type: SET_JOBS, payload: data });
        } else {
            throw new Error("Error fetching results");
        }
        } catch (error) {
        console.log(error);
        }
    };
};
