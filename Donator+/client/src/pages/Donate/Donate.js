import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import {Card,Form,FloatingLabel,Button, Container} from 'react-bootstrap'
import './donate.css'
const Donate = () => {
  return (
    <div className='home'>
        <Sidebar/>
    
        {/* <div style={{textAlign:'center'}}> */}
            <Container style={{marginTop:"10px", }}>
            
    <Card  className='sm-12'>
      <Card.Body>
        <Card.Title style={{textAlign:"center", fontSize:"40px"}}>Donate</Card.Title>
        <Card.Text>
        <>

       

        <form  >
       
        <Form.Floating className="mb-3" >
           
        <Form.Text id="passwordHelpBlock" muted>
       I offer the donation of: 
      </Form.Text>

    
      {['checkbox'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>All organs, tissues and eyes</Form.Check.Label>
          </Form.Check>
        </div>
      ))}


<Form.Text id="passwordHelpBlock" muted>
        Limited organs, tissues and eyes as checked below: 
      </Form.Text>



      <div  className="mb-4">
          <Form.Check  id="check-api" value="bone and connective tissues">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Bones and connective tissues</Form.Check.Label>
  </Form.Check>
  <Form.Check  id="check-api" value="corneas">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Corneas</Form.Check.Label>
  </Form.Check>
  <Form.Check  id="check-api" value="eyes">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Eyes</Form.Check.Label>
  </Form.Check>
  <Form.Check  id="check-api" value="heart">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Heart</Form.Check.Label>
  </Form.Check>
  <Form.Check  id="check-api" value="kidneys">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Kidneys</Form.Check.Label>
  </Form.Check>

  <Form.Check  id="check-api" value="liver">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Liver</Form.Check.Label>
  </Form.Check>

  <Form.Check  id="check-api" value="Lungs">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Lungs</Form.Check.Label>
  </Form.Check>

  <Form.Check  id="check-api" value="skin">
            <Form.Check.Input  isValid />
            <Form.Check.Label>skin</Form.Check.Label>
  </Form.Check>


  </div>


  <Form.Text id="passwordHelpBlock" muted >
    * I wish to donate my organs and/or tissues for the perpose(s) of: 
      </Form.Text>
      <Form.Check  id="check-api" value="liver">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Transplantation and Research</Form.Check.Label>
  </Form.Check>

  <Form.Check  id="check-api" value="Lungs">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Transplantation only</Form.Check.Label>
  </Form.Check>

  <Form.Check  id="check-api" value="skin">
            <Form.Check.Input  isValid />
            <Form.Check.Label>Research only</Form.Check.Label>
  </Form.Check>
      
   
  <Form.Text id="passwordHelpBlock" muted >
    * I wish to enroll in the Donate Life Organ and Tissue Doner Registry. I understand that by 
    enrolling in the registry i am giving legal consent to the donation of my organs 
    , tissues and eyes (as specified above) in the event of my death. 
      </Form.Text>
    
 

  </Form.Floating> 
  <Form.Floating className="mb-3" >
    <Form.Control
      id="floatingInputCustom"
      type="name"
      required
     
    />

    <label htmlFor="floatingInputCustom">Name</label>
  </Form.Floating>
  
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="text"
      required
    />
    
    <label htmlFor="floatingPasswordCustom">Place</label>
    <Button variant="primary" type="submit" style={{margin:'20px 0 10px 0'}}>Donate</Button>{' '}
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

export default Donate