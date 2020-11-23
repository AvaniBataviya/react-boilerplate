import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { getItemFromStorage } from '../utils/helper';

const DashBoard = () => {
  const userFromStorage = getItemFromStorage('user');
  return (
    <Container fluid className="p-0">
      <Row
        className="justify-content-center align-items-center 
      h-100vh p-0 m-0"
      >
        <Col sm="12" md={6}>
          <h1>Welcome,</h1>
          <h4>{userFromStorage && userFromStorage.email}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
