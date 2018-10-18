import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';

export default class Footer extends Component {
  render(){
    return(
      <Container className="mt-3">
        <Row>
          <Col>
            <h6 className="text-center">2018</h6>
          </Col>
        </Row>
      </Container>
    );
  }
  
}