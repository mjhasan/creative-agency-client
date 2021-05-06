import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './OrderList.css'

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('https://gentle-fjord-52823.herokuapp.com/allOrder')
            .then(response => response.json())
            .then(data => data && setOrderList(data));

    }, [])

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });


    const classes = useStyles({
        table: { padding: '30px' }
    });
    const [orderStatus, setOrderStatus] = useState({})

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableHead>
                        <TableRow className="table-header">
                            {/* <div className="table-wrapper"> */}
                            <TableCell width="18" >Name</TableCell>
                            <TableCell width="18">Email ID</TableCell>
                            <TableCell width="18">Service</TableCell>
                            <TableCell width="26">Project Details</TableCell>
                            <TableCell width="10">Blueprint</TableCell>
                            <TableCell width="10" align="center">Status</TableCell>
                            {/* </div> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((orderList) => (
                            <TableRow key={orderList.name}>
                                <TableCell width="18" component="th" scope="row">
                                    {orderList.name}
                                </TableCell>
                                <TableCell width="18">{orderList.email}</TableCell>
                                <TableCell width="18">{orderList.serviceName}</TableCell>
                                <TableCell width="26%">{orderList.projectDetails}</TableCell>
                                <TableCell width="10%"><a href={`https://gentle-fjord-52823.herokuapp.com/${orderList.img}`} rel="noreferrer" target="_blank">Download</a></TableCell>
                                <TableCell width="10%" align="right">
                                    <select>
                                        <option value='Pending' >Pending</option>
                                        <option value='Done'>Done</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
};

export default OrderList;