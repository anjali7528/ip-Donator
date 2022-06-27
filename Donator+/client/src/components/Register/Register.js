import React from 'react'
import {Card,Form,FloatingLabel,Button} from 'react-bootstrap'

const Register = () => {

  return (
    <div style={{textAlign:'center'}}>
    <Card style={{ width: '50vh', border:'1px solid gray', borderRadius:'10px'}} className='sm-12'>
      <Card.Body>
        <Card.Title style={{margin:'10px 0 20px 0'}}>Register</Card.Title>
        <Card.Text>
        <>
        <form  >
        <Form.Floating className="mb-3" >
    <Form.Control
      id="floatingInputCustom"
      type="email"
      
    />
    <label htmlFor="floatingInputCustom">Name</label>
  </Form.Floating>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="Date"
     
    />
    <label htmlFor="floatingInputCustom">Date of Birth</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type=""
     
    />

<label htmlFor="floatingInputCustom">Phone Number</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
     
    />


    <Form.Floating className="mb-3">
    
  </Form.Floating>
<Form.Group className="mb-3">
<label htmlFor="floatingInputCustom">Gender</label>
        <Form.Select>

          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </Form.Select>
      </Form.Group>

      <label htmlFor="floatingInputCustom">Aadhar Number</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
     
    />

    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
     
    />
    
    <label htmlFor="floatingPasswordCustom">Password</label>
    <Button variant="primary" type="submit" style={{margin:'20px 0 10px 0'}}>Submit</Button>{' '}
  </Form.Floating>
  </form>
  {/* {error && <span>Something went wrong!</span>} */}
</>
        </Card.Text>
        
      </Card.Body>
    </Card>
   </div>
  )
}

export default Register