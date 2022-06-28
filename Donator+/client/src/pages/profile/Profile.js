import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import {Card,Form,FloatingLabel,Button, Container} from 'react-bootstrap'

const Profile = () => {
  return (
    <div className='home'>
        <Sidebar/>
    
        {/* <div style={{textAlign:'center'}}> */}
            <Container style={{marginTop:"10px", }}>
            
    <Card  className='sm-12'>
      <Card.Body>
        <Card.Title style={{textAlign:"center", fontSize:"40px"}}>Profile</Card.Title>
        <Card.Text>
        <>

       

        <form  >
       
        <label htmlFor='imgp'><img  style={{width:"20%",marginBottom:"10px", cursor:"pointer"}} src="https://images.unsplash.com/photo-1480406266260-49c193257b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" /></label>
        <Form.Control type="file" id="imgp" style={{marginBottom:"20px"}}/>
            
        <Form.Floating className="mb-3" >
           
    <Form.Control
      id="floatingInputCustom"
      type="text"
      disabled
      
    />
    <label htmlFor="floatingInputCustom">Name</label>
  </Form.Floating>
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="Date"
      disabled
     
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
      type="phone"
     
    />

<label htmlFor="floatingInputCustom">Address</label>
  </Form.Floating> 
  <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
      disabled
     
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
  <Form.Floating className="mb-3" >
    <Form.Control
      id="floatingInputCustom"
      type="email"
     
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
    </Container>
   
    </div>
  )
}

export default Profile