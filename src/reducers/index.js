import counter from "./counter.js";
import timerReducer from "./timerReducer";
import letters from "./letters";
import modal from "./modal.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  timerReducer,
  letters,
  modal
});

export default rootReducer;
