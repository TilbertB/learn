import React from 'react'
import Main from './Main/main_container';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
export default function App() {

  const MainStyled = styled.div`
    background-image: linear-gradient(#122c3f,#285f89);
    height: 100vh;
  `
  // 122c3f - топ, 285f89 - бот
  return (
    <MainStyled>
      <Container>
        <Row>
          <Col xs='5'>
            <Main/> 
          </Col>
        </Row>
      </Container>
    </MainStyled>
  )
}
