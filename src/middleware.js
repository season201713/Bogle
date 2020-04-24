import { addTime, resetTime } from "./action";

export const initTimer = () => {
  return function(dispatch, getState) {
    // dispatch(addTime());
    window.setInterval(() => {
      //console.log(getState());
      const { timerReducer } = getState();
      if (timerReducer < 180) {
        dispatch(addTime());
      } else {
        clearInterval(window.timerInterval);
        dispatch(resetTime());
      }
    }, 1000);
  };
};
