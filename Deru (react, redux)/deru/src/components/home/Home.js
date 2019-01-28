import React from 'react'

import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {

  const ButtonCustom = styled(Button)`
    color: #d9e778;
    border-color: #d9e778;
    border-width: 2px;
    font-weight: bold;
    &:hover{
      background-color: #d9e778;
      border-color: #d9e778;
      color: #A9A9A9;
    }
    @media (max-width: 770px) {
        margin-bottom: 5px
    }
  `

  const Home = styled.div`
    text-transform: uppercase;
    font-family: 'Prompt', sans-serif;
    font-weight: black;
    font-size:0.8rem;
    margin-top: 10rem;
    @media (max-width: 770px) {
      h1{
        font-size:2rem;
      }
      
  }
  `;
  return (
      <Container className="text-center" >
          <Row>
            <Home className="col-lg-8 col-md-10 mx-auto">
              <h1 className="display-4">
              EOS Truth & Performance Bonds
              </h1>
              <span>Guarantee your promises</span>
            </Home>
          </Row>
          <Row className="mt-2">
            <Col className="text-center">
             
                <ButtonCustom variant="outline-light" size="lg" className="mx-1">Make promise</ButtonCustom>
                <ButtonCustom variant="outline-light" size="lg" className="mx-1">Search promise</ButtonCustom>
                <ButtonCustom variant="outline-light" size="lg" className="mx-1">Arbitrators</ButtonCustom>
              
            </Col>
          </Row>
      </Container>
  )
}
