import React, { useContext, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Slide } from "react-awesome-reveal";
import AppContext from '../../Contexts/AppContext';
import { ColorButton } from './ViewBooks'

import moment from 'moment'

const IssuedBooks = () => {
  const {
    issuedBooks,
    setIssuedBooks,
    getIssuedBooks,
    selectedIssuedBook,
    deleteIssuedBooks,
  } = useContext(AppContext)

  useEffect(() => {
    getIssuedBooks()
  }, [])
  return (
    <Slide>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Issue ID</TableCell>
            <TableCell align="center">Book ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Borrower Name</TableCell>
            <TableCell align="center">Issuer Name</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Date Of Issue</TableCell>
            <TableCell align="center">Date Of Return</TableCell>
            <TableCell align="center">Return Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issuedBooks.map((book) => (
            <TableRow key={book.id}>
              <TableCell align="center">{book.id}</TableCell>
              <TableCell align="center">{book.BookID}</TableCell>
              <TableCell align="center">{book.BookTitle}</TableCell>
              <TableCell align="center">{book.Borrower}</TableCell>
              <TableCell align="center">{book.Issuer}</TableCell>
              <TableCell align="center">{book.Quantity}</TableCell>
              <TableCell align="center">
                {moment(book.DateOfIssue).format('MMMM Do YYYY')}
              </TableCell>
              <TableCell align="center">
                {moment(book.DateOfReturn).format('MMMM Do YYYY')}
              </TableCell>
              <TableCell align="center">{book.ReturnStatus}</TableCell>
              <TableCell align="center">
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={(e) => selectedIssuedBook(book.id)}
                >
                  Edit
                </ColorButton>
                <ColorButton
                  variant="contained"
                  sx={{ marginRight: 1, marginBottom: 1 }}
                  onClick={(e) => deleteIssuedBooks(book.id)}
                >
                  Delete
                </ColorButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Slide>
  )
}

export default IssuedBooks