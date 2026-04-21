import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import React, { useEffect, useMemo, useState } from 'react'

const AdminOrders = () => {

  const [allOrders, setallOrders] = useState([])
  useEffect(() => {
    let fetchAllOrders = async () => {
      try {
        let { data } = await axios.get("")
        setallOrders(data?.data)
      } catch (error) {
        console.log(error)
      }
    }

    //function call
    fetchAllOrders()
  }, [])


  let columns = useMemo(() => [
    {
      accessorKey: "userId.firstName",
      header: "Customer Name"
    },

    {
      accessorKey: "userId.address.city",
      header: "City"
    },

    {
      accessorKey: "orderAmount",
      header: "Amount"
    },
    {
      accessorKey: "orderStatus",
      header: "Status"
    },

    {
      accessorKey: "userId.email",
      header: "Email"
    },
    {
      header: "Actions",
      cell: ({ row }) => <Button
        onClick={() => Navigate("/", { state: row.origin })}
        variant='contained'>Details</Button>,
    }
  ], [])


  let table = useMaterialReactTable({
    columns,
    data: allOrders,
    enablePagination: true,

  })
  return (
    <>
      <Typography variant='h4'>All orders</Typography>
      <Box>
        <MaterialReactTable table={table} />
      </Box>
    </>
  )
}

export default AdminOrders