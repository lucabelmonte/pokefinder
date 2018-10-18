import React, { Component } from 'react';
import '../App.css';

import {Progress, Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap';

export default class PokeVis extends Component {
  constructor(props){
    super(props);
    this.api = "https://pokeapi.co/api/v2/";

    this.state = {
      pokeId: this.props.data.id,
      load: false
    };
  }

  

  fetchEvolutionChain(){
    fetch(this.api + 'evolution-chain/' + this.state.pokeId + '/')
      .then(result => result.json())
      .then(data => {
        this.setState({
          evolution: data.chain
        })
      })
  }

  fetchGender(){
    fetch(this.api + 'gender/' + this.state.pokeId + '/')
      .then(result => result.json())
      .then(data => {
        this.setState({
          gender: data,
          load: true
        })
      })
  }


  render(){
    const {data, pokeType} = this.props;
    const {types, stats} = data;
    const damage = pokeType.damage_relations;

    return(
      <Container>
        <hr></hr>
        <Row>
          <Col className="mt-3"   md={{ size: 10, offset: 1 }}>
            <h1 className="text-center">
              {data.name} <small className="text-muted">#{data.id}</small>
            </h1>

            <Row>
              <Col className="border-right" md="4">
                <h5>Normal:</h5>
                <Row>
                  <Col>
                    <img className="img-responsive" src={data.sprites.front_default} alt="Front default"></img>
                  </Col>
                  <Col>
                    <img className="img-responsive" src={data.sprites.back_default} alt="Back default"></img>
                  </Col>
                </Row>
                <hr />

                <h5>Shiny:</h5>
                <Row>
                  <Col>
                    <img src={data.sprites.front_shiny} alt="Front shiny"></img>
                  </Col>
                  <Col>
                    <img src={data.sprites.back_shiny} alt="Back shiny"></img>
                  </Col>
                </Row>
              </Col>


              <Col md="8">
                <Row>
                  <Col>
                    <h5>Type:</h5>
                    <ListGroup>
                      {
                        types.map((type, key) => {
                          return (
                            <ListGroupItem key={key}>{type.type.name}</ListGroupItem>
                          );
                        })
                      }
                    </ListGroup><br/>
                    
                  </Col>
                  <Col>
                    <h5>Height:</h5>
                    {data.height / 10}m

                    <hr/>

                    <h5>Weight:</h5>
                    {data.weight / 10}kg
                  </Col>
                </Row>
                
                <hr/>

                <h5>Base stats:</h5>
                <ListGroup>
                  {
                    stats.map((stat, key) => {
                      return (
                        <ListGroupItem key={key}>
                          {stat.stat.name}: <span className="text-muted">{stat.base_stat}</span>
                          <Progress value={stat.base_stat / 2.3} />
                        </ListGroupItem>
                      );
                    })
                  }
                </ListGroup>

                <hr/>

                <Row>
                  <Col>
                    <h5>Damage from:</h5>
                    <ListGroup>
                      <h6>2x</h6>
                      {
                        damage.double_damage_from.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }

                      <hr/>

                      <h6>0.5x</h6>
                      {
                        damage.half_damage_from.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }

                      <hr/>

                      <h6>0x</h6>
                      {
                        damage.no_damage_from.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }
                    </ListGroup>
                  </Col>
                  <Col>
                    <h5>Damage to:</h5>
                    <ListGroup>
                      <h6>2x</h6>
                      {
                        damage.double_damage_to.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }

                      <hr/>

                      <h6>0.5x</h6>
                      {
                        damage.half_damage_to.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }

                      <hr />

                      <h6>0x</h6>
                      {
                        damage.no_damage_to.map((data, key) => {
                          return (
                            <ListGroupItem key={key}>{data.name}</ListGroupItem>
                          );
                        })
                      }
                    </ListGroup><br />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}