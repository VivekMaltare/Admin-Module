import React from 'react'
import '../HomeRightBar/HomeRightBar.css'
import Navbar from '../Navbar/Navbar'
import { Tooltip, BarChart, CartesianGrid, Bar, PieChart, Pie } from 'recharts'
export default function HomeRightBar() {
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
  const data3 = [
    {
      "name": "Page A",
      "uv": 4000
    },
    {
      "name": "Page B",
      "uv": 3000
    },
    {
      "name": "Page C",
      "uv": 2000
    },
    {
      "name": "Page D",
      "uv": 2780
    },
    {
      "name": "Page E",
      "uv": 1890
    },
    {
      "name": "Page F",
      "uv": 2390
    },
    {
      "name": "Page G",
      "uv": 3490
    }
  ]
  return (
    <div className='mainHomeRightbar'>
      <Navbar />
      <div>
        <div className='itemContainer'>
          <div className='itemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Doctors</p>
              <p className='taskCounter'>115</p>
              <p className='currentMonth1'>Current Month</p>
            </div>
            <div className='pieChartContainer'>
              <PieChart width={730} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              </PieChart>
            </div>
          </div>
          <div className='itemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Moderators</p>
              <p className='taskCounter'>115</p>
              <p className='currentMonth1'>Current Month</p>
            </div>
            <div className='barChartContainer'>
              <BarChart width={180} height={100} data={data3}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          <div className='itemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Patients</p>
              <p className='taskCounter'>200</p>
              <p className='currentMonth1'>Current Month</p>
            </div>
            <div className='pieChartContainer'>
              <PieChart width={730} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              </PieChart>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
