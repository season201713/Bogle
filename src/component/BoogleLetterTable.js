import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADDLETTER,
  ADDKEY,
  UPDATEALERT,
  RESETALERT,
  RESETLETTER,
  RESETKEY
} from "../action";
const BoogleLetterTable = () => {
  const dispatch = useDispatch();
  const letter = useSelector(state => state.letters);
  const wordkey = useSelector(state => state.AddKeyReducer);
  return (
    <div className="board">
      {letter.map((letterArray, i) => (
        <div key={"a" + i} className="board-row">
          {letterArray.map((letter, index) => (
            <button
              key={i + "b" + index}
              type="button"
              className="btn btn-light boggle"
              onClick={() => {
                if (wordkey.indexOf(i + "b" + index) == -1) {
                  dispatch(ADDLETTER(letter));
                  dispatch(ADDKEY([i + "b" + index]));
                } else {
                  dispatch(
                    UPDATEALERT({
                      display: true,
                      variant: "danger",
                      message: "Can't use the same block twice."
                    })
                  );
                  dispatch(RESETLETTER());
                  dispatch(RESETKEY());
                  clearInterval(window.timerInterval);
                  window.setTimeout(() => {
                    dispatch(RESETALERT());
                  }, 3000);
                }
              }}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default BoogleLetterTable;
