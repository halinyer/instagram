import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "./profileReducer";
import { postReducer } from "./publication";

const rootReducer = combineReducers({
    profile:profileReducer,
    post: postReducer
})


export default rootReducer