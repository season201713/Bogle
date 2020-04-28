import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDLETTER } from "../action";
const BoogleLetterTable = () => {
  const dispatch = useDispatch();
  const letter = useSelector(state => state.letters);
  return (
    <div className="board">
      {letter.map((letterArray, i) => (
        <div key={"a" + i} className="board-row">
          {letterArray.map((letter, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-light boggle"
              onClick={() => {
                dispatch(ADDLETTER(letter));
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
