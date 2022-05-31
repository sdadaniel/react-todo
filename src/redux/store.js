import { configureStore } from "@reduxjs/toolkit";
import loggerMiddelware from "../lib/loggerMiddelware";
import rootReducer from "./index";
import ReduxThunk from "redux-thunk";
const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddelware, ReduxThunk],
});

export default store;
