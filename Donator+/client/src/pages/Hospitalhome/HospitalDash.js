import React from 'react'
import HospitalHome from '../../components/HospitalDashboard.js/HospitalHome'
import Sidebar from '../../components/sidebar/Sidebar'
import'./hospitaldash.css'

const HospitalDash = () => {
  return (
        <div className='home'>  
    <div className='sidebarDiv'> 
        <Sidebar/>
        </div>
        <div className='mainpage'>
    <div className='boxes'>
        <HospitalHome/>
        </div>
    <div className="footbarDiv">

    </div>
    </div>
    
    </div>
    
  )
}

export default HospitalDash