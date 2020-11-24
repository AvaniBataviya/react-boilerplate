import React from 'react';
import { Col, Row } from 'reactstrap';
import { getItemFromStorage } from '../../utils/helper';

const Welcome = () => {
  const userFromStorage = getItemFromStorage('user');

  return (
    <Row
      className="justify-content-center align-items-center 
      h-100vh p-0 m-0"
    >
      <Col sm="12" md={6}>
        <h1>Welcome,</h1>
        <h4 className="text-secondary">
          {userFromStorage && userFromStorage.email}
        </h4>
      </Col>
    </Row>
  );
};

export default Welcome;
