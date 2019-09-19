import React, { Component } from "react";
import { Row, Col, Container, TextInput } from 'react-materialize';

import Mcss from "materialize-css";

class Search extends Component {

  componentDidMount() {
    //Inicializar os componentes do formulário Materialize
    Mcss.AutoInit();
  }

  render() {
    return (
        <Container>
          <Row>
            <Col s={6} m={5}>
              <TextInput s={12} icon="account_circle" label="Usuário git" />
            </Col>
            <Col s={5} s={5}>
              <TextInput s={12} icon="arrow_forward" label="Repositorios" />
            </Col>
          </Row>
        </Container>
    )
  }
}

export default Search;
