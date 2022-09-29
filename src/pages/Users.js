import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";

import UserTable from "../components/UserTable";

const Users = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <UserTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
