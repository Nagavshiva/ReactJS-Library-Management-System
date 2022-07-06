import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import './App.css'

import Sidebar from './components/Sidebar'
import AppState from './Contexts/AppState';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow, sans-serif',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <div className="App">
          <Sidebar />
        </div>
      </AppState>
    </ThemeProvider>
  )
}

export default App