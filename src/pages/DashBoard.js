import React from 'react';
import { Container } from 'reactstrap';
import Welcome from '../components/dashboard/Welcome';

const DashBoard = () => {
  return (
    <Container fluid className="p-0">
      <Welcome />
    </Container>
  );
};

export default DashBoard;
