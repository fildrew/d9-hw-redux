import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers/avalaiblejobs";
import favouriteReducers from "../reducers/favourite";
import { combineReducers } from "@reduxjs/toolkit";

const globalReducer = combineReducers({
    job: jobReducer,
    favourite: favouriteReducers,
    });

const store = configureStore({
    reducer: globalReducer,
});

export default store;
