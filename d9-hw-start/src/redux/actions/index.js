export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavorite = (company) => ({ type: ADD_TO_FAVOURITE, payload: company });
export const removeFromFavorite = (company) => ({ type: REMOVE_FROM_FAVOURITE, payload: company });
