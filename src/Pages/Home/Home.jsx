import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomeRightBar from '../../Components/HomeRightBar/HomeRightBar'
import '../Home/Home.css'
export default function Home() {
  return (
    <div className='mainHomeContainer'>
        <Sidebar/>
        <HomeRightBar/>
    </div>
  )
}
