import React from 'react'
import Boxes from '../boxes/Boxes';
import Sidebar from '../sidebar/Sidebar';
import './home.css';
import Footbar from '../footbar/Footbar';


function Home() {
  
  return (
    <div className='home'>  
    <div className='sidebarDiv'> 
    <Sidebar/>
    </div>
    <div className='mainpage'>
    <div className='boxes'>
    <Boxes/>
    </div>
    <div className="footbarDiv">
    <Footbar/>
    </div>
    </div>
    
    </div>
  )
}

export default Home