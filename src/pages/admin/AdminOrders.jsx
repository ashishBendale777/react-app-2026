import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Typography } from '@mui/material'
import axios from 'axios'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import React, { useEffect, useMemo, useState } from 'react'

const AdminOrders = () => {

  const [allOrders, setallOrders] = useState([])
  const [selectedOrder, setselectedOrder] = useState(null)

  const [isOpen, setisOpen] = useState(false)
  const [selOrdStatus, setselOrdStatus] = useState("")

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

  let updateOrderStatus = async () => {
    let reqBody = {
      orderId: selectedOrder?._id,
      orderStatus: selOrdStatus
    }

    try {
      let result = await axios.put("", reqBody)
      alert("Order Status Updated")
      setisOpen(false)
      // Navigate()
    } catch (error) {
      console.log(error)
    }
  }

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
      cell: ({ row }) => (<>
        <Button
          onClick={() => Navigate("/", { state: row.origin })}
          variant='contained'>Details
        </Button>
        <Button onClick={() => {
          setselectedOrder(row?.origin)
        }}>
          Update
        </Button>
      </>)
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
      <Dialog open={isOpen} onClose={() => setisOpen(false)}>
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
            <Typography>{`Current Status:${selectedOrder?.orderStatus}`}</Typography>
            <FormControl>

            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={()=> setisOpen(false)} >Cancel</Button>
          <Button variant='contained' onClick={()=> {
            updateOrderStatus()
          }}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AdminOrders