import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BoogleRules = () => {
  return (
    <Modal show={""}>
      <Modal.Header>Game over</Modal.Header>
      <Modal.Footer>
        <p>Wanna try again?</p>
        <Button onClick={() => {}}>Restart</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BoogleRules;
