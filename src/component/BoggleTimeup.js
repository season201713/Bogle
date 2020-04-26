import React from "react";
import { useSelector } from "react-redux";
const BoggleTimeup = () => {
  const counter = useSelector(state => state.counterReducer);
  return <div>{counter}</div>;
};

export default BoggleTimeup;
