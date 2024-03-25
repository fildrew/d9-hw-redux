import { configureStore } from "@reduxjs/toolkit";
import { prefCompaniesReducer } from "./prefCompanies";
import { jobFetchingReducer } from "./jobFetching";

export default configureStore({
    reducer: {
        prefCompanies: prefCompaniesReducer,
        jobFetching: jobFetchingReducer,
    },
});