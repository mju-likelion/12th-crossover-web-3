import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle.ts'
import { GlobalFont } from './styles/GlobalFont.ts'
import { theme } from './styles/theme.ts'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFont />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
