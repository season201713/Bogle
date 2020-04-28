import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { restartGame, getScore } from "../middleware.js";
//import Button from "react-bootstrap/Button";
import { RESETLETTER } from "../action";
const BoogleFooter = () => {
  const word = useSelector(state => state.addletter);
  const alert = useSelector(state => state.AlertReducer);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col md="4" className="submit">
          <p>
            <u>Your Word: {word.toUpperCase()}</u>
          </p>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              dispatch(getScore(word));
            }}
          >
            Submit
          </button>
        </Col>
        <Col md="4" className="cancel">
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => {
              dispatch(RESETLETTER());
            }}
          >
            Cancel
          </button>
        </Col>
        <Col md="4" className="Restart">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => dispatch(restartGame())}
          >
            Restart
          </button>
        </Col>
        <Alert variant={alert["variant"]} isOpen={alert["display"]}>
          {alert["message"]}
        </Alert>
      </Row>
    </Container>
  );
};

export default BoogleFooter;
