import React,{useState} from 'react'
import "./sidebar.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {Image} from 'react-bootstrap'
import { FaList, FaRegHeart} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { BsFillChatLeftTextFill} from "react-icons/bs";
import {BsPatchQuestion} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import { BiCog } from "react-icons/bi";
import { RiPencilLine } from "react-icons/ri";


import {Link} from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css';




const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    <>
 <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<CgProfile/>} id='picon' >
              <Image  style={{width:'140px', marginLeft:'15px',borderRadius:'50%'}} src="https://images.unsplash.com/photo-1480406266260-49c193257b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"></Image>
               <p style={{marginLeft:'60px', marginTop:'10px'}}>Name</p>
              </MenuItem>
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Profile</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Donations</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">

              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}

export default Sidebar
