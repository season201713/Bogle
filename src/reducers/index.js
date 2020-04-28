import counter from "./counter.js";
import timerReducer from "./timerReducer";
import letters from "./letters";
import modal from "./modal.js";
import startgame from "./startgame.js";
import addletter from "./addletter.js";
import AddedWordReducer from "./AddedWordReducer";
import AlertReducer from "./AlertReducer";
import AddKeyReducer from "./AddKeyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  timerReducer,
  letters,
  modal,
  startgame,
  addletter,
  AddedWordReducer,
  AlertReducer,
  AddKeyReducer
});

export default rootReducer;
