import React from 'react'

import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const Wrapper = styled.div`
    background-image: url("../../images/bg-main.png");
  `;

  const Home = styled.div`
    text-transform: uppercase;
    font-family: 'Prompt', sans-serif;
    font-weight: black;
    font-size:0.8rem;
  `;
  return (
    <Wrapper>
      <Container className="text-center">
          <Row>
            <Home className="col-lg-8 col-md-10 mx-auto mt-5">
              <h1 className="display-4">
              EOS Truth & Performance Bonds
              </h1>
              <span>Guarantee your promises</span>
            </Home>
          </Row>
          <Row className="mt-2">
            <Col className="text-center">
            
                <Button variant="outline-success">Make promise</Button>
                <Button variant="outline-success">Search promise</Button>
                <Button variant="outline-success">Arbitrators</Button>
              
            </Col>
          </Row>
      </Container>
    </Wrapper>
  )
}
