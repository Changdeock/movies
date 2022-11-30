import { combineReducers } from "redux";
import movieReducer from "./moviceReducer";

export default combineReducers({
    movie : movieReducer,
});                                                         