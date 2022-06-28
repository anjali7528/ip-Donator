import React from 'react'
import { Button,Container,Col,Row} from 'react-bootstrap'
import Hsignup from '../../components/HospitalSignUp/Hsignup';
import './Hregister';


const Hregister = () => {
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
      <div className='card'><Hsignup/> </div>
  </div>
  </div>
  )
}


export default Hregister