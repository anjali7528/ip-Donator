import React from 'react'
import "./sidebar.css";



function Sidebar() {
  
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
      <img src="https://images.unsplash.com/photo-1480406266260-49c193257b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""></img>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>Anjali</span>
    <span className='sidebarTitled'>Registration No: 123456</span>
    <div className='sidebarListDiv'>
    <ul className='sidebarList'> 
    <li>Date of Birth: 24/08/2001/F</li>
    <li>Blood Group: O+</li>
    <li>Contact:872002408</li>
    <li>Aadhar Id: 12346789001</li>
        </ul>
    </div>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle2'>Emergency Contact</span>
      <div className='sidebarListDiv'>
    <ul className='sidebarList'> 
    <li>Name: Vandana</li>
    <li>Contact:8727832750</li>
        </ul>
    </div>
    </div>
    </div>  
  )
}

export default Sidebar