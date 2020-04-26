import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { restartGame } from "../middleware.js";
//import Button from "react-bootstrap/Button";
const BoogleFooter = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col md="4" className="submit">
          <button type="button" className="btn btn-outline-success">
            Submit
          </button>
        </Col>
        <Col md="4" className="cancel">
          <button type="button" className="btn btn-outline-warning">
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
      </Row>
    </Container>
  );
};

export default BoogleFooter;
