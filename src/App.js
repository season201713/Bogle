import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoggleHeader from "./component/BoggleHeader";
import BoogleLetterTable from "./component/BoogleLetterTable";
import BoogleFooter from "./component/BoogleFooter";
import BoogleUserWord from "./component/BoogleUseWord";
import BoogleCorrectWords from "./component/BoogleCorrectWords";

const App = () => {
  return (
    <Container>
      <BoggleHeader />
      <hr />
      <Row>
        <Col md="8" className="letter-container">
          <div className="table-dark">
            <BoogleLetterTable />
            <BoogleFooter />
          </div>
        </Col>
        <Col md="4" className="RuleUesedword-container">
          <div className="table-dark">
            <BoogleUserWord />
            <BoogleCorrectWords />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
