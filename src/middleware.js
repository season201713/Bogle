import {
  addTime,
  resetTime,
  letters,
  showModal,
  resetModal,
  StartGame,
  RESETLETTER,
  ADDWORD,
  RESETWORD,
  UPDATEALERT,
  RESETALERT,
  INCREMENT,
  RESETSCORE,
  RESETKEY
} from "./action";
export const restartGame = () => {
  return function(dispatch) {
    clearInterval(window.timerInterval);
    dispatch(resetTime());
    dispatch(RESETSCORE());
    dispatch(getLetter());
    dispatch(resetModal());
    dispatch(RESETWORD());
    dispatch(RESETALERT());
    dispatch(RESETLETTER());
    dispatch(RESETKEY());
  };
};
export const Gamestart = () => {
  return function(dispatch) {
    dispatch(
      StartGame({
        display: true
      })
    );
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

export const getScore = data => {
  return function(dispatch, getState) {
    clearTimeout(window.alertTimeout);
    const { AddedWordReducer } = getState();
    dispatch(RESETLETTER());
    if (data.length <= 2) {
      dispatch(
        UPDATEALERT({
          display: true,
          variant: "danger",
          message:
            "Oops " + data.toUpperCase() + " must have more then two syllables"
        })
      );
      dispatch(RESETLETTER());
      dispatch(RESETKEY());
      clearInterval(window.timerInterval);
      window.setTimeout(() => {
        dispatch(RESETALERT());
      }, 3000);
    } else if (AddedWordReducer.indexOf(data) !== -1) {
      dispatch(
        UPDATEALERT({
          display: true,
          variant: "danger",
          message: "Oops,you cant submit " + data.toUpperCase() + " twice"
        })
      );
      dispatch(RESETLETTER());
      dispatch(RESETKEY());
      clearInterval(window.timerInterval);
      window.setTimeout(() => {
        dispatch(RESETALERT());
      }, 3000);
    } else {
      fetch("http://localhost/bogle/api/getscore.php?data=" + data).then(res =>
        res.json().then(result => {
          if (result["status"] === "ok") {
            dispatch(ADDWORD([data]));
            dispatch(INCREMENT(result["point"]));
            dispatch(
              UPDATEALERT({
                display: true,
                variant: "success",
                message:
                  data.toUpperCase() + " yipiee " + result["point"] + " points"
              })
            );
            dispatch(RESETLETTER());
            dispatch(RESETKEY());
            clearInterval(window.timerInterval);
            window.setTimeout(() => {
              dispatch(RESETALERT());
            }, 3000);
          } else if (result["status"] === "not found") {
            dispatch(
              UPDATEALERT({
                display: true,
                variant: "danger",
                message: data.toUpperCase() + " is Not A Word"
              })
            );
            dispatch(RESETLETTER());
            dispatch(RESETKEY());
          } else {
            dispatch(
              UPDATEALERT({
                display: true,
                variant: "danger",
                message: result["status"]
              })
            );
          }
        })
      );
    }
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
