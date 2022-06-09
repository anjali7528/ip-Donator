import React ,{useState} from 'react'
import './Box.css'


export default function ProfileBox() {
  
  return (
    <div className='post'>
    <div className='conatiner' >
    <span className='postTitle'>
       Profile
      </span>
         <img 
         className='postImg'
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
         alt=''/>
         </div>
    
    </div>
  )
}
