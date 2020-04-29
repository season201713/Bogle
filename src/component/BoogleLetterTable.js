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
        <div key={"a" + i} className={i + " board-row"}>
          {letterArray.map((letter, index) => (
            <button
              key={i + "b" + index}
              type="button"
              className={i + "b" + index + " btn btn-light boggle"}
              onClick={() => {
                if (wordkey.length) {
                  let lastKey = wordkey[wordkey.length - 1];
                  let validKeys = [];
                  let parent = 0;
                  let child = 0;
                  for (parent = i - 1; parent <= i + 1; parent++) {
                    for (child = index - 1; child <= index + 1; child++) {
                      validKeys.push(parent + "b" + child);
                      0;
                    }
                  }
                  if (!validKeys.includes(lastKey)) {
                    dispatch(RESETLETTER());
                    dispatch(RESETKEY());

                    clearTimeout(window.alertTimeout);

                    dispatch(
                      UPDATEALERT({
                        display: true,
                        variant: "danger",
                        message: "Oops, letters must be adjoining in a 'chain'."
                      })
                    );

                    window.alertTimeout = setTimeout(() => {
                      dispatch(
                        RESETALERT({
                          display: false,
                          variant: "",
                          message: ""
                        })
                      );
                    }, 2000);

                    return false;
                  }
                }
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
