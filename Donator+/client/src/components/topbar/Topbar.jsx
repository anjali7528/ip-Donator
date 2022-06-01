import React ,{useContext}from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'

export default function Topbar() {
  return (
    <>
    <div className='top'>

    <div className='topLeft'>
    <img src= {logo} className="logo"/>
    </div>
    <div className='topCenter'>
        <div className='topList'>
            <div className='topListItem'>HOME</div>
            <div className='topListItem'>ABOUT</div>
            <div className='topListItem'>CONTACT </div>
            <div className='topListItem'>WRITE</div>
            <div className='topListItem'>LOGOUT</div>
        </div>
    </div>
    <div className='topRight'>
        <img className="topImage" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="profile image" />
        <span className='topusername'>Anjali</span>

    </div>
</div>
 <div className='line'></div>
 </>
  )
  
}

