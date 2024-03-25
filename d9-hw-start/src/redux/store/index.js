import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
