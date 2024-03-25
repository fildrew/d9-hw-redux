import { createSlice } from "@reduxjs/toolkit";

export const jobFetchingSlice = createSlice({
  // ------NOME
  name: "jobFetching",

  // ------STATO INIZIALE
  initialState: {
    value: [],
    isLoading: true,
    error: null,
  },

  // --------REDUCERS
  reducers: {
    // Nota: il reducer fetchData è ora sincrono
    fetchDataSuccess: (state, action) => {
      return {
        ...state,
        value: action.payload,
        isLoading: false,
      };
    },

    fetchDataFailure: (state, action) => {
      // Potresti gestire gli errori in modo diverso
      return { ...state, isLoading: true, error: action.payload };
    },
  },
});

// Thunk per gestire la logica asincrona
export const fetchDataAsync = (searchTerm) => async (dispatch) => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${searchTerm}&limit=20`);
    if (response.ok) {
      const { data } = await response.json();
      dispatch(jobFetchingSlice.actions.fetchDataSuccess(data));
    } else {
      dispatch(jobFetchingSlice.actions.fetchDataFailure());
    }
  } catch (error) {
    console.log(error);
    dispatch(jobFetchingSlice.actions.fetchDataFailure());
  }
};

// Esporta il reducer e le azioni
export const { fetchDataSuccess, fetchDataFailure } = jobFetchingSlice.actions;
export const jobFetchingReducer = jobFetchingSlice.reducer;
