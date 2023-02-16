
// import React, { useEffect, useState } from 'react'

// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { makeRequest } from '../../axios';
// import Button from '@mui/material/Button';
// import { report } from '../../../../backend/routes/admin';

// const columns = [
//     { id: 'sendername', label: 'Sender Name', minWidth: 170 },
//     { id: 'reports', label: 'Reports', minWidth: 170 }
//     // {
//     //     id: 'email',
//     //     label: 'Email',
//     //     minWidth: 170,
//     // },
//     // {
//     //     id: 'status',
//     //     label: 'User Status',
//     //     minWidth: 170,
//     //     // align: 'right',
//     // },
// ];

// const rows = [

// ];



// function ReportManagement() {

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
//     const [allposts, setallposts] = useState([]);
//     const [sendername, setsendername] = useState('');

//     const [senderName, setsenderName] = useState('');

//     const [blockuser, setblockuser] = useState(false);
//     const [unblockuser, setunblockuser] = useState(false);


//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };


//     useEffect(() => {



//         makeRequest.get('/users/getreports').then((response) => {

//             console.log(response, "Get reports ");
//             if (response.status) {
//                 console.log(response?.data, "Get report dataaaaaaa");
//                 setallposts(response?.data)


//             }
//             else {
//                 alert("Something went wrong")
//             }
//         }).catch((err) => {
//             console.log(err);
//             alert(err.response.data)
//             console.log("-----errrrr---", err.response.data);

//         })




//     }, [])



//     // async function findsenderinfo(sendername) {

//     //     let find = await makeRequest.get(`/users/getsendername/${sendername}`)
//     //     if (find?.status) {
//     //         console.log(find?.data, " get sender name");
//     //         //  setsenderName(response?.data) 
//     //         // return find?.data
//     //     }
//     //     else {
//     //         console.log("Something went wrong")
//     //     }
//     //     // return find


//     // }


//     return (
//         <div>
//             <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//                 <TableContainer sx={{ maxHeight: 440 }}>
//                     <Table stickyHeader aria-label="sticky table">
//                         <TableHead>
//                             <TableRow>
//                                 {columns.map((column) => (
//                                     <TableCell
//                                         key={column.id}
//                                         align={column.align}
//                                         style={{ minWidth: column.minWidth }}
//                                     >
//                                         {column.label}
//                                     </TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {allposts && allposts.map((post, index) => {
//                                 return (
//                                     <div key={index}>
//                                         {post?.report?.map((reports, index) => {

//                                             return < TableRow key={index} hover role="checkbox" tabIndex={-1}>


//                                                 <TableCell  >

//                                                     {/* {findsenderinfo(reports.userid)} */}
//                                                     {reports.userid}
                                                    

//                                                 </TableCell>

//                                                 <TableCell  >
//                                                     {reports.text}
//                                                 </TableCell>

//                                                 {/* <TableCell  >
//                                                     {users.email}
//                                                 </TableCell> */}




//                                             </TableRow>

//                                         })}

//                                     </div>
//                                 );
//                             })}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[10, 25, 100]}
//                     component="div"
//                     count={rows.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </Paper>

//         </div >
//     )
// }

// export default ReportManagement
