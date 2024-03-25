import { createSlice } from "@reduxjs/toolkit";

export const prefCompaniesSlice = createSlice({
  // ---------NAME--------------
  name: "prefCompanies",

  // ---------- INITIAL STATE-------------
  initialState: {
    value: [],
  },

  // ----------REDUCERS-------------------

  reducers: {
    addCompanie: (state, action) => {
      if (state.value.includes(action.payload)) {
        console.log("compagnia già aggiunta!");
      } else {
        state.value.push(action.payload);
      }

      state.value.forEach((i) => console.log(i));
      //   console.log(action.payload);
    },

    remCompanie: (state, action) => {
      state.value = state.value.filter((company) => company !== action.payload);
    },
  },
});

export const { addCompanie, remCompanie } = prefCompaniesSlice.actions;
export const prefCompaniesReducer = prefCompaniesSlice.reducer;
