import React from 'react'
import './userdash.css'
import {Card, CardGroup,  Row,Col} from 'react-bootstrap';
import {MdOutlineAddCircleOutline} from "react-icons/md";
import {Link} from 'react-router-dom';

const UserDash = () => {
  return (
    <div>
    <Row xs={1} md={3} className="g-4">
      
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"  />
            <Card.Body>
              <Card.Title>Profile</Card.Title>     
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top"  src="https://images.unsplash.com/photo-1559757296-5c84adc6d116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
            <Card.Body>
              <Card.Title>Donate Organ </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
          <Card.Img variant="top"  src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
            <Card.Body>
              <Card.Title>Settings</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div>
  )
}

export default UserDash