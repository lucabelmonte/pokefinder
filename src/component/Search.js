import React, { Component } from 'react';
import '../App.css';

import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';


export default class Search extends Component {
  render(props){
    //const {props} = this;
    return (
      <Container>
        <Row onSubmit={this.props.loginHandler}>
          <Col className={"mt-2"} sm="12" md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Input type="text" name="username" id="username" placeholder="Name or ID" />
              </FormGroup>
            </Form>
            <hr/>
            <div>
              <Button color="primary" onClick={this.props.prevPokemon}>Indietro</Button>
              <Button color="primary" onClick={this.props.nextPokemon} className="float-right">Avanti</Button>

            </div>


          </Col>
        </Row>
      </Container>
    );
  }
}