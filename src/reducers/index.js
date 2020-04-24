import counterReducer from "./counter.js";
import timerReducer from "./timerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer,
  timerReducer
});

export default rootReducer;
