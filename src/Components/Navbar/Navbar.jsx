import React from 'react'
import '../Navbar/Navbar.css'
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className='mainNavbarContainer'>
      <div className='dashboardContainer'>
        <h1 className='dashText'>Dashboard</h1>
      </div>
      {/* <div className='extra'>abhi khali hai baad me search ki jagh kuch aur daal dena hai</div> */}
      <div className='profileItemsContainer'>
        <IoIosNotifications className='notificationIcon'/>
        <div className='profileItems'>
          <FaUser className='profileIcon'/>
          <p className='profileName'>Vivek</p>
        </div>
      </div>
    </div>
  )
}
