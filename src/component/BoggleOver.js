import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../middleware.js";
const BoggleOver = () => {
  const timerEnd = useSelector(state => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal show={timerEnd["display"]}>
      <Modal.Header>Game over</Modal.Header>
      <Modal.Footer>
        <p>Wanna try again?</p>
        <Button
          onClick={() => {
            dispatch(restartGame());
          }}
        >
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BoggleOver;
