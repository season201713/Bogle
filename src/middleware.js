import { addTime, resetTime, letters, showModal, resetModal } from "./action";

export const restartGame = () => {
  return function(dispatch) {
    clearInterval(window.timerInterval);
    dispatch(resetTime());
    dispatch(getLetter());
    dispatch(resetModal());
  };
};

export const initTimer = () => {
  return function(dispatch, getState) {
    clearInterval(window.timerInterval);
    // dispatch(addTime());
    window.setInterval(() => {
      //console.log(getState());
      const { timerReducer } = getState();
      if (timerReducer < 180) {
        dispatch(addTime());
      } else {
        clearInterval(window.timerInterval);
        // dispatch(resetTime());
        dispatch(
          showModal({
            display: true,
            message: "Your final score is "
          })
        );
        clearInterval();
      }
    }, 1000);
  };
};

export const getLetter = () => {
  return function(dispatch) {
    dispatch(
      letters([
        [
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97)
        ],
        [
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97)
        ],
        [
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97)
        ],
        [
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97),
          String.fromCharCode(Math.floor(Math.random() * Math.floor(26)) + 97)
        ]
      ])
    );
  };
};
