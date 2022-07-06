import * as React from 'react'
import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContentText,
  MenuItem,
} from '@mui/material'
import { ColorButton } from './ViewBooks'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { TextField } from 'formik-mui'

import { DatePicker } from 'formik-mui-lab'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import AppContext from '../../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";

export const returnStatuses = [
  {
    value: 'Returned',
    label: 'Returned',
  },
  {
    value: 'Not Returned',
    label: 'Not Returned',
  },
]

const Issue = () => {
  const {
    issueBook,
    newBookIssue,
    setNewBookIssue,
    existingIssue,
    setExistingIssue,
    updateIssuedBooks,
    clearedValues,
  } = React.useContext(AppContext)

  let initialValues = {}

  {
    if (newBookIssue) {
      initialValues = {
        BookID: newBookIssue.id,
        BookTitle: newBookIssue.BookTitle,
        ISBN: newBookIssue.ISBN,
        Borrower: '',
        Issuer: '',
        Quantity: '',
        DateOfIssue: '',
        DateOfReturn: '',
        ReturnStatus: '',
      }
    } else if (existingIssue) {
      initialValues = {
        BookID: existingIssue.BookID,
        BookTitle: existingIssue.BookTitle,
        ISBN: existingIssue.ISBN,
        Borrower: existingIssue.Borrower,
        Issuer: existingIssue.Issuer,
        Quantity: existingIssue.Quantity,
        DateOfIssue: existingIssue.DateOfIssue,
        DateOfReturn: existingIssue.DateOfReturn,
        ReturnStatus: existingIssue.ReturnStatus,
      }
    } else {
      initialValues = {
        BookID: '',
        BookTitle: '',
        ISBN: '',
        Borrower: '',
        Issuer: '',
        Quantity: '',
        DateOfIssue: '',
        DateOfReturn: '',
        ReturnStatus: '',
      }
    }
  }

  const validationSchema = Yup.object({
    BookID: Yup.string().required('Required'),
    BookTitle: Yup.string().required('Required'),
    ISBN: Yup.number().required('Required'),
    Borrower: Yup.string().required('Required'),
    Issuer: Yup.string().required('Required'),
    Quantity: Yup.number().required('Required'),
    DateOfIssue: Yup.date().required('Required'),
    DateOfReturn: Yup.date().required('Required'),
    ReturnStatus: Yup.string().required('Required'),
  })

  // Modal States Start
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  // Modal States End

  const navigate = useNavigate()

  return (
    <Slide>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false)
          if (existingIssue.id) {
            updateIssuedBooks(values)
            setExistingIssue([]) // This is to clear the filled form data in the state after submission
            setNewBookIssue('') // This is to clear the filled form data in the state after submission
            resetForm({ values: clearedValues })
          } else if (newBookIssue.id) {
            issueBook(values)
            setExistingIssue([]) // This is to clear the filled form data in the state after submission
            setNewBookIssue('') // This is to clear the filled form data in the state after submission
            resetForm({ values: clearedValues })
          }
          handleClickOpen()
        }, 500)
      }}
    >
      {({ values, submitForm, isSubmitting, resetForm, touched, errors }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Form>
            <Grid
              item
              container
              spacing={2}
              xs={12}
              alignItems="center"
              justify="center"
            >
              <Container
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid item xs={12} sm={12} md={7} lg={7} mt={4}>
                  <Paper elevation={5}>
                    <Grid item xs={12} pt={2}>
                      <Typography variant="h4">Issue A Book</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        sx={{ margin: 2 }}
                      >
                        <Field
                          component={TextField}
                          name="BookID"
                          type="text"
                          label="Book ID"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        sx={{ margin: 2 }}
                      >
                        <Field
                          component={TextField}
                          name="BookTitle"
                          type="text"
                          label="Book Title"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          name="ISBN"
                          type="number"
                          label="ISBN"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          name="Borrower"
                          type="text"
                          label="Borrower Name"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          name="Issuer"
                          type="text"
                          label="Issuer Name"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          name="Quantity"
                          type="number"
                          label="Quantity Issued"
                          helperText={touched.name ? 'Required' : ''}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={DatePicker}
                          name="DateOfIssue"
                          label="Date Of Issue"
                          textField={{
                            variant: 'outlined',
                            fullWidth: true,
                          }}
                          format="MM/dd/yyyy"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={DatePicker}
                          name="DateOfReturn"
                          label="Date Of Return"
                          textField={{
                            variant: 'outlined',
                            fullWidth: true,
                          }}
                          format="MM/dd/yyyy"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 0, sm: 0 },
                        }}
                      >
                        <Field
                          component={TextField}
                          type="text"
                          name="ReturnStatus"
                          label="Book Issue Status"
                          select
                          variant="outlined"
                          helperText="Select Not Returned in case of fresh issue"
                          margin="normal"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          {returnStatuses.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      alignItems="center"
                      justify="center"
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{
                        display: { sm: 'flex' },
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                        marginRight: 2,
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        ml={2}
                        mr={2}
                        sx={{
                          marginBottom: { xs: 2, sm: 2 },
                          marginTop: { xs: 2, sm: 2 },
                          paddingBottom: { xs: 2, sm: 2 },
                        }}
                      >
                        <ColorButton
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={isSubmitting}
                          onClick={submitForm}
                        >
                          {existingIssue.id ? 'Update Entry' : 'Issue Book'}
                        </ColorButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Container>
            </Grid>
          </Form>

          {/* Modal Start */}
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Successfully Submitted'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  The form has been successfully submitted.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={() => navigate('/issuedbooks')} autoFocus>
                  View Issued Books
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          {/* Modal End */}
        </LocalizationProvider>
      )}
    </Formik>
    </Slide>
  )
}

export default Issue