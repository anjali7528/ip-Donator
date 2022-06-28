import React from 'react'
import {Card,Form,FloatingLabel,Button} from 'react-bootstrap'


const Hsignup = () => {
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
      type=""
     
    />

<label htmlFor="floatingInputCustom">Phone Number</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
     
    />



      <label htmlFor="floatingInputCustom">Hospital Registration Number</label>
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


export default Hsignup