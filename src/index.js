import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@material-ui/core'
import { mainTheme } from './theme/mainTheme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
