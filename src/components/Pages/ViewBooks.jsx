import { Typography, Container, Grid, Paper, Box, Stack } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../Contexts/AppContext'
import { Slide } from "react-awesome-reveal";
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background:
    'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%);',
  '&:hover': {
    backgroundColor: purple[700],
  },
}))

const ViewBooks = () => {
  const { books, getBooks, deleteBook, handleSelected } = useContext(AppContext)

  useEffect(() => {
    getBooks()
  }, [])
  return (
    <>
    
      <Typography variant="h4" pb={2}>
        Available Books
      </Typography>
      <Slide>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.id} item xs={12} sm={12} md={12}>
              <Paper elevation={3} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: '20%',
                    height: '100%',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: '100%',
                      marginRight: '10px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                      image={book.ImageUrl}
                      alt="Paella dish"
                    />
                  </Card>
                </Box>
               
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    margin: { xs: '10px 10px', md: '10px 10px' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      {book.BookTitle}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      by {book.Author}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Book ID: {book.id}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      ISBN-10: {book.ISBN}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Language: {book.Language}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Quantity: {book.Quantity}
                    </Typography>
                  </Box>
                  <Box>
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingBottom: '10px',
                      }}
                    >
                      <ColorButton
                        variant="contained"
                        color="success"
                        sx={{ marginRight: '10px' }}
                        onClick={(e) => handleSelected(book.id)}
                      >
                        Issue
                      </ColorButton>
                      <ColorButton
                        variant="contained"
                        onClick={(e) => deleteBook(book.id)}
                      >
                        Remove
                      </ColorButton>
                    </Stack>
                  </Box>
               
                </Box>
         
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Slide>
    </>
  )
}

export default ViewBooks