import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { Details } from './pages/Details'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </StrictMode>,
)
