import React from 'react'
import { Button,Container,Col,Row,NavLink} from 'react-bootstrap'
import './Uregister';
import Register from '../../components/Register/Register';

const Uregister = () => {
  return (
    <div>
    <Container>
      <Row>
      <Col xl={1} sm={11}></Col>
      <Col  xl={12}sm={1}>
      <Button variant="dark" style={{margin:'10px'}}>Login</Button>{' '}
      </Col>
      </Row>
    </Container>

  <div className='login'>
      <div className='card'> <Register/></div>
  </div>
  </div>
  )
}

export default Uregister