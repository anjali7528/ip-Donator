import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar';
import UserDash from '../../components/UserDashboard/UserDash';
import './home.css';



function Home() {
  
  return (
    <div className='home'>  
    <div className='sidebarDiv'> 
    <Sidebar/>
    </div>
    <div className='mainpage'>
    <div className='boxes'>
    <UserDash/>
    </div>
    <div className="footbarDiv">

    </div>
    </div>
    
    </div>
  )
}

export default Home