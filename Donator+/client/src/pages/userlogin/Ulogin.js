import React from 'react'
import { Button,Container,Col,Row } from 'react-bootstrap'
import Login from '../../components/Login/Login'
import './ulogin.css';

const Ulogin = () => {
  return (
    <>
      <Container>
        <Row>
        <Col xl={1} sm={11}></Col>
        <Col  xl={12}sm={1}>
        <Button variant="dark" style={{margin:'10px'}}>Register</Button>{' '}
        </Col>
        </Row>
      </Container>

    <div className='login'>
        <div className='card'> <Login/></div>
       
    </div>
    </>
  )
}

export default Ulogin