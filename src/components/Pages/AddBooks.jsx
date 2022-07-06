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
  } from '@mui/material'
  
  import React, { useContext } from 'react'
  import { Formik, Form } from 'formik'
  import * as Yup from 'yup'
  
  import TextField from '@mui/material/TextField'
  import { ColorButton } from './ViewBooks'
  
import AppContext from '../../Contexts/AppContext';
  import { useNavigate } from 'react-router-dom';
  import { Slide } from "react-awesome-reveal";
  
  const AddBooks = () => {
    const { addBook } = useContext(AppContext )
  
    const initialValues = {
      BookTitle: '',
      Author: '',
      ISBN: '',
      Language: '',
      Quantity: '',
      ImageUrl: '',
      ShortTitle: '',
    }
  
    const validationSchema = Yup.object({
      BookTitle: Yup.string().required('Required'),
      Author: Yup.string().required('Required'),
      ISBN: Yup.number().required('Required'),
      Language: Yup.string().required('Required'),
      Quantity: Yup.number().required('Required'),
      ImageUrl: Yup.string().required('Required'),
      ShortTitle: Yup.string().required('Required'),
    })
  
    const handleSubmit = async (values) => {
      await addBook(values)
      handleClickOpen()
    }
  
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
      <div>
        <Slide>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
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
                        <Typography variant="h4">
                          Add a Book To the Library
                        </Typography>
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
                          <TextField
                            id="outlined"
                            label="Book Title"
                            name="BookTitle"
                            helperText={
                              formik.touched.BookTitle && formik.errors.BookTitle
                                ? 'Required'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={
                              formik.touched.BookTitle && formik.errors.BookTitle
                            }
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
                          <TextField
                            id="outlined"
                            label="Author"
                            name="Author"
                            helperText={
                              formik.touched.Author && formik.errors.Author
                                ? 'Required'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={formik.touched.Author && formik.errors.Author}
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
                          <TextField
                            id="outlined"
                            label="ISBN"
                            name="ISBN"
                            type="number"
                            helperText={
                              formik.touched.ISBN && formik.errors.ISBN
                                ? 'Required Numeric Value'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={formik.touched.ISBN && formik.errors.ISBN}
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
                          <TextField
                            id="outlined"
                            label="Language"
                            name="Language"
                            helperText={
                              formik.touched.Language && formik.errors.Language
                                ? 'Required'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={
                              formik.touched.Language && formik.errors.Language
                            }
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
                          <TextField
                            id="outlined"
                            label="Quantity"
                            name="Quantity"
                            type="number"
                            helperText={
                              formik.touched.Quantity && formik.errors.Quantity
                                ? 'Required Numeric Value'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={
                              formik.touched.Quantity && formik.errors.Quantity
                            }
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
                          <TextField
                            id="outlined"
                            label="Image URL"
                            name="ImageUrl"
                            helperText={
                              formik.touched.ImageUrl && formik.errors.ImageUrl
                                ? 'Required'
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={
                              formik.touched.ImageUrl && formik.errors.ImageUrl
                            }
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
                          <TextField
                            id="outlined"
                            label="Short Title"
                            name="ShortTitle"
                            type="text"
                            helperText={
                              formik.touched.ShortTitle &&
                              formik.errors.ShortTitle
                                ? 'Please enter a short book title for table view '
                                : ''
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={
                              formik.touched.ShortTitle &&
                              formik.errors.ShortTitle
                            }
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
                          >
                            Add Book
                          </ColorButton>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Container>
              </Grid>
            </Form>
          )}
        </Formik>
        </Slide>
        {/* Modal */}
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Book Added Successfully'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                The book has been successfully added to the library.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={() => navigate('/')} autoFocus>
                View Books
              </Button>
            </DialogActions>
          </Dialog>
        </div>
  
        {/* Modal */}
      </div>
    )
  }
  
  export default AddBooks;