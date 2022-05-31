import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js";

const rootReducer = combineReducers({ categoryReducer });

export default rootReducer;
