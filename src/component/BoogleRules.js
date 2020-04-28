import React from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { initTimer } from "../middleware.js";
const BoogleRules = () => {
  const start = useSelector(state => state.startgame);
  const dispatch = useDispatch();
  return (
    <Modal show={start["display"]} id="GameStart">
      <Modal.Header>Rule</Modal.Header>
      <Modal.Footer>
        <div className="rule-body">
          <p>Please follow the steps below.</p>
          <ul>
            <li>Click on the letters to form a word.</li>
            <li>Words must contain at least three letters.</li>
            <li>
              No letter cube may be used more than once within a single word.
            </li>
            <li>3 or 4 letter word gets 1 point.</li>
            <li>5 letter word gets 2 points.</li>
            <li>letter word gets 3 points.</li>
            <li>7 letter word gets 4 points.</li>
            <li>8 or more letter word gets 11 points.</li>
            <li>Once the word is complete click on submit.</li>
            <li>To reset the word click on reset.</li>
            <li>There will be a 3 minute time for the round.</li>
            <li>To restart the game, click on restart.</li>
          </ul>
        </div>
        <Button
          onClick={() => {
            dispatch(initTimer());
            $(".modal-backdrop").hide();
            $(".modal").hide();
          }}
        >
          Start
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BoogleRules;
