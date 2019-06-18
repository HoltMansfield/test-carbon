import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Flex from 'flexbox-react'
// import { useFindPolicyLogic } from './useFindPolicyLogic'
// import { } from './styled'


export default function FindPolicy () {
  // const { someValue } = useFindPolicyLogic()

  return (
    <Container fluid style={{ lineHeight: '32px', width: '100%' }}>
      <Row debug>
        <Col debug>1 of 2</Col>
        <Col debug>2 of 2</Col>
      </Row>
      <br />
      <Row debug>
        <Col debug>1 of 3</Col>
        <Col debug>2 of 3</Col>
        <Col debug>3 of 3</Col>
      </Row>
    </Container>
  )
}
