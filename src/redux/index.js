import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js";

const rootReducer = combineReducers({ category: categoryReducer });

export default rootReducer;
