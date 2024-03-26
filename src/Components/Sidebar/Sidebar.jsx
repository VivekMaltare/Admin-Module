import React from 'react'
import '../Sidebar/Sidebar.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='mainSidebarContainer'>
      <div>
        <ul className='ulContainer'>
            <h4 className='menu'>Menu</h4>
            <li className='liContainer'>
                <FaHome className='sidebarIcons'/>
                <p className='itemNames'>Home</p>
            </li>
            <li className='liContainer'>
                <FaUser className='sidebarIcons'/>
                <Link to='/doctors'><p className='itemNames'>Doctors</p></Link>
            </li>
            <li className='liContainer'>
                <FaUser className='sidebarIcons'/>
                <p className='itemNames'>Moderators</p>
            </li>
            <li className='liContainer'>
                <FaUser className='sidebarIcons'/>
                <p className='itemNames'>Responders</p>
            </li>
            <li className='liContainer'>
                <IoLogOut className='sidebarIcons'/>
                <p className='itemNames'>Logout</p>
            </li>
        </ul>
        <div className='mainScheduledContainer'>
            <h4 className='RequestTitle'>Requests</h4>
            <div className="RequestContainer">
            <a href="/Requests">View Requests</a>
            </div>
        </div>
      </div>
    </div>
  )
}
