import React from 'react'
import '../RequestsDetails/RequestDetails.css'
import Navbar from '../Navbar/Navbar'
import { DataGrid } from '@mui/x-data-grid'
export default function RequestDetails() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 130,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'gender', headerName: 'Gender', width: 130,sortable:false, },
    { field: 'license_no', headerName: 'License No', width: 130 },
    { field: 'experience', headerName: 'experience', width: 130 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 130,
    },
    {
      field: 'Requests',
      headerName: 'Requests',
      width: 130,
      renderCell:(params)=>{
        return(
          <button className="requestsButtonApprove">Approve</button>
        )
      }
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon',MiddleName:'lannister', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',MiddleName:'lannister', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',MiddleName:'lannister', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya',MiddleName:'lannister',age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',MiddleName:'john',age: null },
    { id: 6, lastName: 'Melisandre', firstName: null,MiddleName:'lannister', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara',MiddleName:'lannister', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini',MiddleName:'lannister', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey',MiddleName:'lannister', age: 65 },
  ];
  return (
    <div className='MainRequestContainer'>
      <Navbar/>
      <div className="RequestsTable">
      <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
      </div>
    </div>
  )
}
