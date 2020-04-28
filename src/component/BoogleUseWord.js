import React from "react";
import { useSelector } from "react-redux";
const BoogleUserWord = () => {
  const usedwords = useSelector(state => state.AddedWordReducer);
  return (
    <div>
      <ul className={usedwords.length ? "show" : "hide"}>
        <h2>Word{usedwords.length > 1 ? "s " : " "}Used</h2>
        {usedwords.map((words, index) => (
          <li key={index}>{words.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default BoogleUserWord;
