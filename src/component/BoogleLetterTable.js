import React from "react";
import { useSelector } from "react-redux";
const BoogleLetterTable = () => {
  const letter = useSelector(state => state.letters);
  return (
    <div className="board">
      {letter.map((letterArray, i) => (
        <div key={"a" + i} className="board-row">
          {letterArray.map((letter, index) => (
            <button key={index} type="button" className="btn btn-light boggle">
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default BoogleLetterTable;
