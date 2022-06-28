import React,{useContext, useRef } from 'react'
import {Card,Form,FloatingLabel,Button} from 'react-bootstrap'



const HospitalSignIn = () => {


  return (
    <div style={{textAlign:'center'}}>
    <Card style={{ width: '50vh', border:'1px solid gray', borderRadius:'10px'}} className='sm-12'>
      <Card.Body>
        <Card.Title style={{margin:'10px 0 20px 0'}}>Login</Card.Title>
        <Card.Text>
        <form >
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email"  placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Registration ID" className="mb-3">
        <Form.Control type="email"  placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password"  placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary" type="submit" style={{margin:'20px 0 10px 0'}}>Login</Button>
      </form>
        </Card.Text>
        
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default HospitalSignIn 