import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {

  render() {
    return (
      <Container fluid="lg">
        <Row >
          <Col >
            <h3>Todos & virtual keyboard</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
